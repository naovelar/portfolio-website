import * as React from "react"

import LinkedInIcon from "../images/sub-images/Linkedin-Icon.png"
import GithubIcon from "../images/sub-images/GitHub-Mark-Light-64px.png"
import EmailIcon from "../images/sub-images/icons8-email-64.png"

export default Footer
function Footer(props) {
  return (
    <footer className="footer" id="Contact">
        
        <div className="footer-container">
        <h2> Contact </h2>
            <div className="footer-group">
                <a href="https://www.linkedin.com/in/naomi-a-678013a2/" target="_blank" rel="noopener noreferrer" > <img src={LinkedInIcon} alt="LinkedIn icon"/> LinkedIn </a>
                <a href="https://github.com/nhporti2" target="_blank" rel="noopener noreferrer">  <img src={GithubIcon} alt="Github Icon"/> Naomi Portillo </a>
                <a href="mailto: nhporti2@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={EmailIcon} alt="Email Icon"/>  nhporti2@gmail.com </a>              
            </div>
        </div>
            <p className="copyright"> &copy; Naomi Portillo </p>
    </footer>
  )
}