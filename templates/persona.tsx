import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PersonaFull, { PersonaFullProps } from '../src/components/Persona/Full';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Layout } from '../src/layouts';
import { StatusProps } from '../src/components/Persona/Status';
import { GatsbyImageProps } from 'gatsby-plugin-image';

export interface PersonaFullContainerQueryData {
    avatarsYaml: PersonaFullProps
}

const PersonaFullContainer = ({ data } ) => {
    const prsn = data.avatarsYaml
    console.log(data.avatarsYaml.avatar.childImageSharp.fluid)

    return (
        <Layout>
            <PersonaFull { ...prsn } />
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
            location
            org
            company
            education
            avatar {
                childImageSharp {
                    gatsbyImageData(
                        width: 800,
                        height: 800,
                        formats: AUTO,
                        placeholder: BLURRED
                    ),
                    # gatsbyImageData: GatsbyImageProps,
                    # fluid(maxWidth: 800) {
                    #     ...GatsbyImageSharpFixed
                    # }
                }
            },
            contacts {
                kind
                label
                id
                url
                quickly
            }
        }
    }
`;

export default PersonaFullContainer;