if (process.env.NODE_ENV === "test") {
  module.exports = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@zeit/next-typescript/babel"
    ]
  };
} else {
  module.exports = {
    presets: [
      "next/babel",
      "@babel/preset-react",
      "@zeit/next-typescript/babel"
    ]
  };
}
