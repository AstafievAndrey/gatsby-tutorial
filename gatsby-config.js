module.exports = {
    siteMetadata: {
        title: `Title from siteMetadata`,
        // link: [
        //     {name:'Main', link: ''},
        //     {name:'About', link: 'about'},
        //     {name:'Contact', link: 'contact'},
        // ],
        linkName: ['Main','About','Contact', 'Files', 'Markdown'],
        linkRef: ['','about','contact','files', 'markdown']
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-typography`
    ],
}