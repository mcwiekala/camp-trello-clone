module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'yarn test',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
}
