import { GatsbyNode } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { resolve } from 'path';

export const createPages = async ({ actions, graphql }) => {
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

        actions.createPage({
            path: username,
            component: resolve('./templates/persona.tsx'),
            context: { username },
        })
    })

}