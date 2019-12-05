import React from "react"
import { Container, Row, Col } from 'reactstrap'
import data from "../data/skills.json"
import "./skills.css"

const skillContainer = () => {
    return (
        <div className="skill-section content-container">
            <h1 className="text-center mt-5 mb-5">These Are My Skills</h1>
            {data.map((category, index) => {
                console.log(data.length)
                return (
                    <>
                        <Row className="align-items-center">
                            <Col xs="6">
                                <h5 style={{ margin: `14% auto`, textAlign: `center`, color: `white` }}>{category.title}</h5>
                            </Col>
                            <Col xs="6" style={{ borderLeft: `2px solid white` }}>
                                <ul>
                                    {category.items.map(item => (
                                        <li style={{ color: `white`, fontWeight: `bold` }}>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <div className={((index + 1) < data.length ? "bottom-border" : "")} style={{ margin: `25px 0px` }}></div>
                    </>
                )
            })}
        </div>
    )
}

export default skillContainer