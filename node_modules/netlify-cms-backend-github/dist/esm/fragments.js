"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileEntry = exports.treeEntry = exports.pullRequest = exports.branch = exports.object = exports.blobWithText = exports.repository = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const repository = (0, _graphqlTag.default)`
  fragment RepositoryParts on Repository {
    id
    isFork
  }
`;
exports.repository = repository;
const blobWithText = (0, _graphqlTag.default)`
  fragment BlobWithTextParts on Blob {
    id
    text
    is_binary: isBinary
  }
`;
exports.blobWithText = blobWithText;
const object = (0, _graphqlTag.default)`
  fragment ObjectParts on GitObject {
    id
    sha: oid
  }
`;
exports.object = object;
const branch = (0, _graphqlTag.default)`
  fragment BranchParts on Ref {
    commit: target {
      ...ObjectParts
    }
    id
    name
    prefix
    repository {
      ...RepositoryParts
    }
  }
  ${object}
  ${repository}
`;
exports.branch = branch;
const pullRequest = (0, _graphqlTag.default)`
  fragment PullRequestParts on PullRequest {
    id
    baseRefName
    baseRefOid
    body
    headRefName
    headRefOid
    number
    state
    title
    merged_at: mergedAt
    repository {
      ...RepositoryParts
    }
    labels(last: 100) {
      nodes {
        name
      }
    }
  }
  ${repository}
`;
exports.pullRequest = pullRequest;
const treeEntry = (0, _graphqlTag.default)`
  fragment TreeEntryParts on TreeEntry {
    path: name
    sha: oid
    type
    mode
  }
`;
exports.treeEntry = treeEntry;
const fileEntry = (0, _graphqlTag.default)`
  fragment FileEntryParts on TreeEntry {
    name
    sha: oid
    type
    blob: object {
      ... on Blob {
        size: byteSize
      }
    }
  }
`;
exports.fileEntry = fileEntry;