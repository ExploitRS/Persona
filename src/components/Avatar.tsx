// import { graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
// import React from 'react'

// const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
//     const avt = props
//     return <StaticImage src={avt.src} alt={avt.alt} />
// }

// export interface AvatarProps {
//     src: string,
//     alt: string,
// }

// export const pageQuery = graphql`
//     query ($username: String) {
//         avatarsYaml(name: { eq: $username }) {
//           username
//           email
//           is_public
//           avatar {
//             childImageSharp {
//               gatsbyImageData(
//                 formats: AUTO,
//                 placeholder: BLURRED
//               )
//             }
//           }
//         }
//       }
// `

// export default Avatar