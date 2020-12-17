"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allEntriesByFolder = exports.getLocalTree = exports.persistLocalTree = exports.runWithLock = exports.getMediaDisplayURL = exports.getMediaAsBlob = exports.blobToFileObj = exports.unpublishedEntries = exports.entriesByFiles = exports.entriesByFolder = void 0;

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _unionBy2 = _interopRequireDefault(require("lodash/unionBy"));

var _semaphore = _interopRequireDefault(require("semaphore"));

var _path = require("./path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MAX_CONCURRENT_DOWNLOADS = 10;

const fetchFiles = async (files, readFile, readFileMetadata, apiName) => {
  const sem = (0, _semaphore.default)(MAX_CONCURRENT_DOWNLOADS);
  const promises = [];
  files.forEach(file => {
    promises.push(new Promise(resolve => sem.take(async () => {
      try {
        const [data, fileMetadata] = await Promise.all([readFile(file.path, file.id, {
          parseText: true
        }), readFileMetadata(file.path, file.id)]);
        resolve({
          file: _objectSpread(_objectSpread({}, file), fileMetadata),
          data: data
        });
        sem.leave();
      } catch (error) {
        sem.leave();
        console.error(`failed to load file from ${apiName}: ${file.path}`);
        resolve({
          error: true
        });
      }
    })));
  });
  return Promise.all(promises).then(loadedEntries => loadedEntries.filter(loadedEntry => !loadedEntry.error));
};

const entriesByFolder = async (listFiles, readFile, readFileMetadata, apiName) => {
  const files = await listFiles();
  return fetchFiles(files, readFile, readFileMetadata, apiName);
};

exports.entriesByFolder = entriesByFolder;

const entriesByFiles = async (files, readFile, readFileMetadata, apiName) => {
  return fetchFiles(files, readFile, readFileMetadata, apiName);
};

exports.entriesByFiles = entriesByFiles;

const unpublishedEntries = async listEntriesKeys => {
  try {
    const keys = await listEntriesKeys();
    return keys;
  } catch (error) {
    if (error.message === 'Not Found') {
      return Promise.resolve([]);
    }

    throw error;
  }
};

exports.unpublishedEntries = unpublishedEntries;

const blobToFileObj = (name, blob) => {
  const options = name.match(/.svg$/) ? {
    type: 'image/svg+xml'
  } : {};
  return new File([blob], name, options);
};

exports.blobToFileObj = blobToFileObj;

const getMediaAsBlob = async (path, id, readFile) => {
  let blob;

  if (path.match(/.svg$/)) {
    const text = await readFile(path, id, {
      parseText: true
    });
    blob = new Blob([text], {
      type: 'image/svg+xml'
    });
  } else {
    blob = await readFile(path, id, {
      parseText: false
    });
  }

  return blob;
};

exports.getMediaAsBlob = getMediaAsBlob;

const getMediaDisplayURL = async (displayURL, readFile, semaphore) => {
  const {
    path,
    id
  } = displayURL;
  return new Promise((resolve, reject) => semaphore.take(() => getMediaAsBlob(path, id, readFile).then(blob => URL.createObjectURL(blob)).then(resolve, reject).finally(() => semaphore.leave())));
};

exports.getMediaDisplayURL = getMediaDisplayURL;

const runWithLock = async (lock, func, message) => {
  try {
    const acquired = await lock.acquire();

    if (!acquired) {
      console.warn(message);
    }

    const result = await func();
    return result;
  } finally {
    lock.release();
  }
};

exports.runWithLock = runWithLock;
const LOCAL_KEY = 'git.local';

const getLocalKey = ({
  branch,
  folder,
  extension,
  depth
}) => {
  return `${LOCAL_KEY}.${branch}.${folder}.${extension}.${depth}`;
};

const persistLocalTree = async ({
  localForage,
  localTree,
  branch,
  folder,
  extension,
  depth
}) => {
  await localForage.setItem(getLocalKey({
    branch,
    folder,
    extension,
    depth
  }), localTree);
};

exports.persistLocalTree = persistLocalTree;

const getLocalTree = async ({
  localForage,
  branch,
  folder,
  extension,
  depth
}) => {
  const localTree = await localForage.getItem(getLocalKey({
    branch,
    folder,
    extension,
    depth
  }));
  return localTree;
};

exports.getLocalTree = getLocalTree;

const getDiffFromLocalTree = async ({
  branch,
  localTree,
  folder,
  getDifferences,
  filterFile,
  getFileId
}) => {
  const diff = await getDifferences(branch.sha, localTree.head);
  const diffFiles = diff.filter(d => {
    var _d$oldPath, _d$newPath;

    return ((_d$oldPath = d.oldPath) === null || _d$oldPath === void 0 ? void 0 : _d$oldPath.startsWith(folder)) || ((_d$newPath = d.newPath) === null || _d$newPath === void 0 ? void 0 : _d$newPath.startsWith(folder));
  }).reduce((acc, d) => {
    if (d.status === 'renamed') {
      acc.push({
        path: d.oldPath,
        name: (0, _path.basename)(d.oldPath),
        deleted: true
      });
      acc.push({
        path: d.newPath,
        name: (0, _path.basename)(d.newPath),
        deleted: false
      });
    } else if (d.status === 'deleted') {
      acc.push({
        path: d.oldPath,
        name: (0, _path.basename)(d.oldPath),
        deleted: true
      });
    } else {
      acc.push({
        path: d.newPath || d.oldPath,
        name: (0, _path.basename)(d.newPath || d.oldPath),
        deleted: false
      });
    }

    return acc;
  }, []).filter(filterFile);
  const diffFilesWithIds = await Promise.all(diffFiles.map(async file => {
    if (!file.deleted) {
      const id = await getFileId(file.path);
      return _objectSpread(_objectSpread({}, file), {}, {
        id
      });
    } else {
      return _objectSpread(_objectSpread({}, file), {}, {
        id: ''
      });
    }
  }));
  return diffFilesWithIds;
};

const allEntriesByFolder = async ({
  listAllFiles,
  readFile,
  readFileMetadata,
  apiName,
  branch,
  localForage,
  folder,
  extension,
  depth,
  getDefaultBranch,
  isShaExistsInBranch,
  getDifferences,
  getFileId,
  filterFile
}) => {
  const listAllFilesAndPersist = async () => {
    const files = await listAllFiles(folder, extension, depth);
    const branch = await getDefaultBranch();
    await persistLocalTree({
      localForage,
      localTree: {
        head: branch.sha,
        files: files.map(f => ({
          id: f.id,
          path: f.path,
          name: (0, _path.basename)(f.path)
        }))
      },
      branch: branch.name,
      depth,
      extension,
      folder
    });
    return files;
  };

  const listFiles = async () => {
    const localTree = await getLocalTree({
      localForage,
      branch,
      folder,
      extension,
      depth
    });

    if (localTree) {
      const branch = await getDefaultBranch(); // if the branch was forced pushed the local tree sha can be removed from the remote tree

      const localTreeInBranch = await isShaExistsInBranch(branch.name, localTree.head);

      if (!localTreeInBranch) {
        console.log(`Can't find local tree head '${localTree.head}' in branch '${branch.name}', rebuilding local tree`);
        return listAllFilesAndPersist();
      }

      const diff = await getDiffFromLocalTree({
        branch,
        localTree,
        folder,
        extension,
        depth,
        getDifferences,
        getFileId,
        filterFile
      }).catch(e => {
        console.log('Failed getting diff from local tree:', e);
        return null;
      });

      if (!diff) {
        console.log(`Diff is null, rebuilding local tree`);
        return listAllFilesAndPersist();
      }

      if (diff.length === 0) {
        // return local copy
        return localTree.files;
      } else {
        // refresh local copy
        const identity = file => file.path;

        const deleted = diff.reduce((acc, d) => {
          acc[d.path] = d.deleted;
          return acc;
        }, {});
        const newCopy = (0, _sortBy2.default)((0, _unionBy2.default)(diff.filter(d => !deleted[d.path]), localTree.files.filter(f => !deleted[f.path]), identity), identity);
        await persistLocalTree({
          localForage,
          localTree: {
            head: branch.sha,
            files: newCopy
          },
          branch: branch.name,
          depth,
          extension,
          folder
        });
        return newCopy;
      }
    } else {
      return listAllFilesAndPersist();
    }
  };

  const files = await listFiles();
  return fetchFiles(files, readFile, readFileMetadata, apiName);
};

exports.allEntriesByFolder = allEntriesByFolder;