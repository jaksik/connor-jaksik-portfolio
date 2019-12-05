import React from "react"
import { Container, Row, Col } from 'reactstrap'
import data from "../data/skills.json"
import "./skills.css"

const skillContainer = () => {
    let counter = 0;
    return (
    <div className="skill-section" style={{}}>
                    <h1 className="text-center mt-5 mb-5">These Are My Skills</h1>

        <Container style={{ marginBottom: `25px`}}>

            {data.map((category, index) => {
                console.log(data.length)
                return (
                    <>
                        <Row>
                            <Col xs="6" style={{ borderRight: `2px solid white` }}>
                                <h5 style={{ margin: `14% auto`, textAlign: `center`, color: `white`}}>{category.title}</h5>
                            </Col>
                            <Col xs="6">
                                <ul>
                                    {category.items.map(item => (
                                        <li style={{color:`white`, fontWeight:`bold`}}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <div className={((index + 1) < data.length ? "bottom-border" : "")} style={{ margin: `25px 0px`}}></div>
                    </>
                )
            }
            )}

        </Container>
    </div>
)}

export default skillContainer