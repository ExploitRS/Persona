import React from 'react';
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import PersonaAboutList, { PersonaAboutListProps } from '../components/Persona/AboutList';

// // import Persona from '../components/Persona';
interface PersonaAboutListContainerQueryData {
    allAvatarsYaml: {
        nodes: Array<PersonaAboutListProps>,
    }
}

export const PersonaAboutListContainer = () => {
    const data = useStaticQuery<PersonaAboutListContainerQueryData>(graphql`
        query PersonaAboutListContainerQueryData {
            allAvatarsYaml {
                nodes {
                    username
                    is_public
                    avatar {
                        childImageSharp {
                            gatsbyImageData(
                                width: 50
                                height: 50
                                placeholder: BLURRED
                                formats: AUTO
                            )
                        }
                    }
                }
            }
        }
    `)
    return <PersonaAboutList personas={data.allAvatarsYaml.nodes} />;
}

export default PersonaAboutListContainer;