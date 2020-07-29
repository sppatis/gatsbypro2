import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({location}) => (
  <Layout location={location}>
    <SEO title="About" />
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptas, quibusdam quod perferendis ab ullam recusandae temporibus in nemo, adipisci hic assumenda eaque, non aperiam obcaecati ipsa? Unde, et dolores?</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
