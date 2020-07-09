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
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyAokGrynkAoiH_M-83Ey2IeJQCcuQsnEfg',
          authDomain: 'trade-c4c5a.firebaseapp.com',
          databaseURL: 'https://trade-c4c5a.firebaseio.com',
          projectId: 'trade-c4c5a',
          storageBucket: 'trade-c4c5a.appspot.com',
          messagingSenderId: '806793345969',
          appId: '1:806793345969:web:a1a34d6c4f8073f277db90',
          measurementId: 'G-CS8P5K2NGR'
        }
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
