module.exports = {
  scripts: {
    default: "webpack-dev-server --inline",
    server: "nodemon src/server",
    test: "jest --no-watchman",
  }
};