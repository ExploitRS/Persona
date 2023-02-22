import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PersonaAboutListContainer from "../containers/PersonaAboutListContainer";
import { Layout } from "../layouts";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PersonaAboutListContainer />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Personas</title>
