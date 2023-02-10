import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PersonaFull, { PersonaFullProps } from '../src/components/Persona/Full';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Layout } from '../src/layouts/layout';

export interface PersonaFullContainerQueryData {
    avatarsYaml: PersonaFullProps
}

const PersonaFullContainer = ({ data } ) => {
    const prsn = data.avatarsYaml
    return (
        <Layout>
            <PersonaFull
                username={ prsn.username }
                alias={ prsn.alias }
                status={ prsn.status }
                email={ prsn.email }
                avatar={ prsn.avatar }
            />
        </Layout>
    )
    console.log(data);
}

export const pageQuery = graphql`
    query($username: String!) {
        avatarsYaml(username: { eq: $username }) {
            username
            alias
            status
            email
            avatar {
                childImageSharp {
                    gatsbyImageData(
                        width: 100,
                        height: 100,
                        formats: AUTO,
                        placeholder: BLURRED
                    )
                    # fluid(maxWidth: 120, maxHeight: 120) {
                    #     ...GatsbyImageSharpFixed
                    # }
                }
            }
        }
    }
`;

export default PersonaFullContainer;