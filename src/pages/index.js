import React from "react"
import Img from "gatsby-image"

import { Link, graphql } from "gatsby"
import { Button, Row, Col } from "reactstrap"

import DropDown from "../components/drop-down"
import projects from "../data/projects.json"
import SEO from "../components/seo"

import resume from "../data/connor-jaksik.pdf"
import skills from "../data/skills.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import "./stars.css"
import "./clouds.css"

const IndexPage = ({ data }) => {
  const projectImgs = data.ProjectImgs.edges;
 
  return (
    <>
      <SEO title="Web Developer" />
      <div className="landing-wrapper">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div style={{ position: `absolute`, zIndex: `1`, width: `100%` }}>
          <div className="space-container">
            <div className="content-container">
              <h1>I Architect<br /> Web Apps</h1>
              <h1 className="right">And Create <br />Digital Assets</h1>
              <h1>If it Seems <br /> Like My Head Is<br /> In The Clouds</h1>
              <h1 className="right">That's Because <br /> It Is</h1>
            </div>
            <Img fluid={data.mountain.childImageSharp.fluid} className="landing-image" style={{ width: `100%` }} />
            <div className="clouds"></div>
          </div>

          <div className="ground">
            <Img fluid={data.background.childImageSharp.fluid} style={{ marginTop: `-100px`, zIndex: `-1`, position: `absolute`, width: `100%` }} />
            <Img fluid={data.background.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `100%`, zIndex: `-1` }} />
            <Img fluid={data.background.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `200vh`, marginTop: `100vh`, zIndex: `-1` }} />
            <div className="content-container">
              <h1>I am Connor Jaksik</h1>
              <p>
                For over a decade before becoming a web developer I was a Skilled Tradesman.
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

              <Row className="no-gutters mt-4">
                <Col xs="8" sm="4" className="offset-2 offset-sm-0">
                  <Img fluid={data.profilePic.childImageSharp.fluid} />
                </Col>
                <Col xs="12" sm="8">
                  <p style={{ textAlign: `right` }} className="mt-4 mt-sm-0">
                    <span style={{ paddingRight: `33px` }}>- Connor Jaksik</span>
                    <br />
                    <span>Boulder, Colorado</span>
                    <a href={resume} download> <br />
                      <Button color="info" size="" className="mt-2" id="resume-button">Resume</Button>
                    </a>
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="content-container">
            <h1 style={{ textAlign: `center`, margin: `100px auto 30px` }} className="mt-5 mb-5">This Is My Work</h1>
            <Row className="no-gutters">
              {projects.map((project, index) => {
                const image = projectImgs.find(n => {
                  return n.node.relativePath === `projects/${project.image}`;
                });
                const imageSizes = image.node.childImageSharp.sizes;
                return (
                  <Col xs="12" sm="6" lg="4" className="p-sm-2 p-lg-3">
                    <div className="project-card">
                      <a href={project.url} target="_blank">
                        <Img
                          title={project.name}
                          alt="Screenshot of Project"
                          sizes={imageSizes}
                          className="card-img_src center-block"
                        />
                      </a>
                      <div style={{ borderTop: `4px solid #718190`, padding: `0 8px` }}>
                        <h5>{project.title}</h5>
                        <p className="project-description">{project.description}</p>
                        <strong><a href={project.url} target="_blank">Demo</a></strong><br />
                        <strong><a href={project.github} target="_blank">Source Code</a></strong>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>



          <div className="skill-section content-container">
            <h1 className="text-center mt-5 mb-5">These Are My Skills</h1>
            {skills.map((category, index) => {
                const itemsLength = skills.length
                return (
                    <>
                        <DropDown category={category} itemsLength={itemsLength} index={index}/>
                    </>
                )
            })}
        </div>

          <h1 style={{ margin: `100px auto 0px`, textAlign: `center`, paddingTop: `100px` }} className="mt-5">Let's Do This</h1>

          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={{ width: `80%`, margin: `0 auto`, border: `1px solid darkbrown`, borderRadius: `38px` }}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input style={{ display: `none` }} type="text" /><br />
            <input required className="form-input" name="name" placeholder="First and Last Name*" type="text" /><br />
            <input required className="form-input" name="email" placeholder="Email*" type="email" /><br />
            <input className="form-input" name="phone" placeholder="Phone Number" type="number" /><br />
            <textarea required className="form-input" name="message" placeholder="Your message here...*" type="textarea" /><br />
            <Button className="submit-button" type="submit">Send It!</Button>
          </form>

          <footer style={{ color: `white`, fontSize: `13px` }} className="mt-5 pt-5 text-center">
            © {new Date().getFullYear()}, Connor Jaksik All Rights Reserved. <Link to="/privacy-policy">Privacy policy</Link>.
        </footer>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    mountain: file(relativePath: { eq: "mountain-top.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    background: file(relativePath: { eq: "rock-background.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profilePic: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clouds: file(relativePath: { eq: "cloud.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ProjectImgs: allFile( filter: { relativePath: { regex: "/projects/.*.png/" }}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`