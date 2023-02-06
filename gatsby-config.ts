import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Persona`,
    siteUrl: `https://p.exploit.rs`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `avatars`,
        path: `${__dirname}/content/avatars`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/content/config`,
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-responsive-iframe',
    //         options: {
    //           wrapperStyle: 'margin-bottom: 1rem',
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 1140,
    //           quality: 90,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-copy-linked-files',
    //       'gatsby-remark-smartypants',
    //       'gatsby-transformer-sharp',
    //       'gatsby-transformer-yaml',
    //     ],
    //   },
    // },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
  ],
}

export default config
