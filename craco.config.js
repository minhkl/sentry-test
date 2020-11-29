const path = require('path');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const resolve = (dir) => path.resolve(__dirname, dir);
console.log('----------- heyyyyyyy')
module.exports = {
  webpack: {
    plugins: [
      new SentryWebpackPlugin({
        // sentry-cli configuration
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "nfq-qt",
        project: "sentry-test",
        release: 'sentry-test@' + require('./package.json').version,
        // webpack specific configuration
        validate: true,
        include: "./build",
        ignore: ["node_modules", "webpack.config.js", "coverage", ".vscode", "scripts", "config"],
      }),
    ],
  },
};
