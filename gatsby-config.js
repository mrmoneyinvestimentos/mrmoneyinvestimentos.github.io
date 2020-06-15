module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.MR_CONTENTFUL_SPACE_ID,
        accessToken: process.env.MR_CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
