module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        siteUrl: `https://3drukarnia.com`,
    },
    plugins: [
        `gatsby-plugin-modal-routing`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `6poh7f43j8kg`,
                accessToken: 'NDVUJMgSYJlXI_9Jk0Yqa0Y508WCNffsUxTV9tB0kOE',
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-sitemap`,
            exclude: ['/inne-uslugi/']
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://3drukarnia.com',
                sitemap: 'https://3drukarnia.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto`,
                    `source sans pro\:300,400,700`
                ],
                display: 'swap'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/ikonka-nadruki-64.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}