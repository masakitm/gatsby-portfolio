const path = require('path')

module.exports = {
  siteMetadata: {
    title: "MasakiTM",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    }
  ]
};
