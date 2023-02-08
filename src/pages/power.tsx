import * as React from "react"
import { Layout } from "../layouts/layout"
import { PersonaFullContainer } from "../containers/PersonaFullContainer"


const Power = () => {
    return (
        <Layout>
            <h1 className="text-cy-blue-light">Luca Todesco</h1>
            <PersonaFullContainer/>
        </Layout>
    )
}

export const Head = () => <title>power</title>

export default Power;