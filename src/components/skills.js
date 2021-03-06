import React from "react"
import DropDown from "./drop-down"
import data from "../data/skills.json"
import "./skills.css"

const skillContainer = () => {
    return (
        <div className="skill-section content-container">
            <h1 className="text-center mt-5 mb-5">These Are My Skills</h1>
            {data.map((category, index) => {
                const itemsLength = data.length
                return (
                    <>
                        <DropDown category={category} itemsLength={itemsLength} index={index}/>
                    </>
                )
            })}
        </div>
    )
}

export default skillContainer