import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"
import Two from "../components/image-two"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="landing-wrapper">
      <div className="space">
        <div className="content-container">
          <h1>I Architect<br /> Software</h1>
          <h1 className="right">And Create <br />Digital Assets</h1>
          <h1>It May Seem <br /> Like My Head Is<br /> In The Clouds</h1>
          <h1 className="right">That's Because <br /> It Is</h1>
        </div>
      </div>
      <Image />
    </div>
    <div className="landing-content" style={{ position: `relative` }}>
      <Img fluid={data.background.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `100vh` }} className="image-two" />
      <Img fluid={data.background.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `100vh`, marginTop: `-30vh`, zIndex: `-50` }} />
      <Img fluid={data.background.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `100vh`, marginTop: `100vh` }} />
      
      <Img fluid={data.background.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `200vh`, marginTop: `100vh` }} />

      <Img fluid={data.trees.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `180vh`, marginTop: `200vh` }} />

      <div style={{ position: `absolute`, zIndex: `100`, width: `100%` }}>
        <div className="content-container" style={{ position: `relative` }}>
          <h1>I am<br /> Connor Jaksik</h1>
          <p>
            For over a decade before becoming a software engineer I was a Skilled Tradesman.
            I completed hundereds of carpentry and welding projects in several different states and countries.
            I had the opportunity to build projects for many amazing people and lead teams of incredibly hard working individuals.
            <br />
            <br />
            This developed my invaluable work ethic of no compromises and only producing the highest quality work.
            I became obsessed with software and digital assets as I began to realize their unique qualities of being able to
            reach any one in the world at any time and their ability to be replicated an infite number of times.
            <br />
            <br />
            I believe that one produces their best work when their life is balanced with relationships and other passions.
            That's why setting a side time to be away from my computer has become sacred to me. If I don't respond to an email quickly
            it's most likely because I'm climbing a mountin or skiing with friends.
            <br />
            <br />
            Dont be shy, send me a message, let's get coffee, and talk about something great that we can create together.
          </p>
          <p style={{ textAlign: `right` }}>
            <span style={{ paddingRight: `55px` }}>- Connor Jaksik</span>
            <br />
            <span>Boulder, Colorado</span>
          </p>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={{ width: `80%`, margin: `50px auto 0px`, border: `1px solid darkbrown`, borderRadius: `38px` }}
          >

            <h1 style={{ margin: `20px auto`, textAlign: `center`, padding: `0`, color: `black` }}>Let's Do This</h1>

            <input type="hidden" name="bot-field" />

            <input type="hidden" name="form-name" value="contact" />

            <input style={{ display: `none` }} type="text" /><br />

            <input required className="form-input" name="name" placeholder="First and Last Name*" type="text" /><br />

            <input required className="form-input" name="email" placeholder="Email*" type="email" /><br />

            <input className="form-input" name="phone" placeholder="Phone Number" type="number" /><br />

            <textarea className="form-input" name="message" placeholder="  Anything else we should know before your lesson?" type="textarea" /><br />

            <button className="submit-button">Send It!</button>

          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    background: file(relativePath: { eq: "att.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trees: file(relativePath: { eq: "river.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`