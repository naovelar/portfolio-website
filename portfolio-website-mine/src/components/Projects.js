import * as React from "react"
import NZA from "../images/nza-law.jpg"
import AirBnb from "../images/airbnblogo.jpg"
import Weather from "../images/weatherapi.jpg"

export default Projects
function Projects(props) {
  return (
    <section className={props.hide ? 'projects show-projects' : 'projects'} ref={props.reference} id="Projects">
        <h2>Projects</h2>
        <div className="projects-container">
            <div className="projects-group">

                    <a href="https://github.com/nhporti2/nza_law_react_project" target="_blank" rel="noopener noreferrer">
                        <img alt="Project1" src={NZA}/>
                        <ul> 
                            <h4> NZA Lawfirm </h4>
                            <p> Converted a previous static website into a functioning React Application. </p>
                            <p className="project-tags"> Tags: HTML, CSS, React </p>
                        </ul>
                    </a>
                    <a href="https://github.com/nhporti2/weather_api" target="_blank" rel="noopener noreferrer">
                        <img alt="Project2" src={Weather}/>
                        <ul> 
                            <h4> Weather API </h4>
                            <p> Using the Open Weather API, created a weather application that displays the High, Low, Forecast and Humidity using JavaScript.</p>
                            <p className="project-tags"> Tags: React, Javascript </p>
                        </ul>
                    </a>
                    <a href="https://github.com/nhporti2/airbnb_weekend_project" target="_blank" rel="noopener noreferrer">
                        <img alt="Project3" src={AirBnb}/>
                        <ul> 
                            <h4> AirBnb Case Study </h4>
                            <p> Utilized Numpy and Pandas to showcase data analysis skills by interpreting and properly displaying data </p>
                            <p className="project-tags"> Tags: Pandas, Python, Numpy </p>
                        </ul>
                    </a>
            </div>
        </div>
    </section>
  )
}