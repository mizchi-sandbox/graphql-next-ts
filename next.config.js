const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  webpack(config, options) {
    config.resolve.extensions.push(".graphql", ".gql");
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });
    return config;
  }
});
