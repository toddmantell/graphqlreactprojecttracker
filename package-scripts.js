module.exports = {
  scripts: {
    ui: "webpack-dev-server --inline",
    graphql: "nodemon src/server",
    test: "jest --no-watchman",
  }
};