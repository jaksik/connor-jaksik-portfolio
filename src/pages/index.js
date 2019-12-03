import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing-wrapper">
    <div className="space">

      <div className="content-container">
      <h1>My name is <br/>Connor Jaksik</h1>
      <h1 className="right">I Make <br/>Digital Assets</h1>
      <h1>It May Seem <br/> That My Head Is<br/> In The Clouds</h1>
      <h1 className="right">That's Because <br/> It Is</h1>
      <h1>I Also Climb <br/> Mountains</h1>

      </div>
    </div>

<Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
