"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reopenPullRequest = exports.createBranchAndPullRequest = exports.createBranch = exports.createPullRequest = exports.closePullRequestAndDeleteBranch = exports.closePullRequest = exports.deleteBranch = exports.updateBranch = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var fragments = _interopRequireWildcard(require("./fragments"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// updateRef only works for branches at the moment
const updateBranch = (0, _graphqlTag.default)`
  mutation updateRef($input: UpdateRefInput!) {
    updateRef(input: $input) {
      branch: ref {
        ...BranchParts
      }
    }
  }
  ${fragments.branch}
`; // deleteRef only works for branches at the moment

exports.updateBranch = updateBranch;
const deleteRefMutationPart = `
deleteRef(input: $deleteRefInput) {
  clientMutationId
}
`;
const deleteBranch = (0, _graphqlTag.default)`
  mutation deleteRef($deleteRefInput: DeleteRefInput!) {
    ${deleteRefMutationPart}
  }
`;
exports.deleteBranch = deleteBranch;
const closePullRequestMutationPart = `
closePullRequest(input: $closePullRequestInput) {
  clientMutationId
  pullRequest {
    ...PullRequestParts
  }
}
`;
const closePullRequest = (0, _graphqlTag.default)`
  mutation closePullRequestAndDeleteBranch($closePullRequestInput: ClosePullRequestInput!) {
    ${closePullRequestMutationPart}
  }
  ${fragments.pullRequest}
`;
exports.closePullRequest = closePullRequest;
const closePullRequestAndDeleteBranch = (0, _graphqlTag.default)`
  mutation closePullRequestAndDeleteBranch(
    $closePullRequestInput: ClosePullRequestInput!
    $deleteRefInput: DeleteRefInput!
  ) {
    ${closePullRequestMutationPart}
    ${deleteRefMutationPart}
  }
  ${fragments.pullRequest}
`;
exports.closePullRequestAndDeleteBranch = closePullRequestAndDeleteBranch;
const createPullRequestMutationPart = `
 createPullRequest(input: $createPullRequestInput) {
  clientMutationId
  pullRequest {
    ...PullRequestParts
  }
}
 `;
const createPullRequest = (0, _graphqlTag.default)`
  mutation createPullRequest($createPullRequestInput: CreatePullRequestInput!) {
    ${createPullRequestMutationPart}
  }
  ${fragments.pullRequest}
`;
exports.createPullRequest = createPullRequest;
const createBranch = (0, _graphqlTag.default)`
  mutation createBranch($createRefInput: CreateRefInput!) {
    createRef(input: $createRefInput) {
      branch: ref {
        ...BranchParts
      }
    }
  }
  ${fragments.branch}
`; // createRef only works for branches at the moment

exports.createBranch = createBranch;
const createBranchAndPullRequest = (0, _graphqlTag.default)`
  mutation createBranchAndPullRequest(
    $createRefInput: CreateRefInput!
    $createPullRequestInput: CreatePullRequestInput!
  ) {
    createRef(input: $createRefInput) {
      branch: ref {
        ...BranchParts
      }
    }
    ${createPullRequestMutationPart}
  }
  ${fragments.branch}
  ${fragments.pullRequest}
`;
exports.createBranchAndPullRequest = createBranchAndPullRequest;
const reopenPullRequest = (0, _graphqlTag.default)`
  mutation reopenPullRequest($reopenPullRequestInput: ReopenPullRequestInput!) {
    reopenPullRequest(input: $reopenPullRequestInput) {
      clientMutationId
      pullRequest {
        ...PullRequestParts
      }
    }
  }
  ${fragments.pullRequest}
`;
exports.reopenPullRequest = reopenPullRequest;