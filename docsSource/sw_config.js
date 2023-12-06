module.exports = {
  globDirectory: 'docs/',
  globPatterns: ['**/*.{css,jpg,ico,html,mjs}'],
  swDest: 'docs/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
