// const config = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'references-empty': [1, 'never'],
//     'footer-max-line-length': [0, 'always'],
//     'body-max-line-length': [0, 'always'],
//   },
// };

const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'revert'],
    ],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
};

module.exports = config;
