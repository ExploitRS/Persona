// import { GatsbyNode } from "gatsby";
// import { IGatsbyImageData } from "gatsby-plugin-image";
// import { resolve } from 'path';
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage} = actions;

    const { data } = await graphql(`
        query Props {
            allAvatarsYaml {
                nodes {
                    username
                    # alias
                    # status
                    # email
                    # avatar {
                    #     childImageSharp {
                    #         gatsbyImageData(
                    #             width: 50
                    #             height: 50
                    #             placeholder: BLURRED
                    #             formats: AUTO
                    #         )
                    #     }
                    # }
                }
            }
        }
    `)
    console.log(data.allAvatarsYaml.nodes);

    data.allAvatarsYaml.nodes.forEach(node => {
        const {
            username,
            // alias,
            // status,
            // email,
            // avatar
        } = node;
        console.log(username)

        actions.createPage({
            path: username,
            component: path.resolve('./templates/persona.tsx'),
            context: { username },
        })
    })

}