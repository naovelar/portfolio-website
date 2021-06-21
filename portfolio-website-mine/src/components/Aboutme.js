import React from "react";
import { IoSpeedometerOutline, IoPhonePortraitSharp} from 'react-icons/io5';
import { HiSparkles } from "react-icons/hi";
import Face from "../images/face.jpg"

export default Aboutme
const Aboutme = (props) => {

  return (

    <section className={props.hide ? 'About-me show-about-me' : 'About-me'} id="Who-Am-I">
        <h2> Who Am I?</h2>
        <div className = "Who-am-I-container">
            <div className="Who-am-I-group">
                <div> <img alt="Face" className="avatar-circle" src={Face}/> </div>
                <ul>
                    <p>Hello! My name is Naomi and I am a software engineer specializing in dynamic web applications as well as collaborative management. <br/> <br/>

                    I pride myself beyond my programming skills, as an enthusiastic collaborator and form my exceptional organization skills<br/> <br/> 

                    In my free time, I thoroughly enjoy nativating the outdoors and can be frequently found seated on a nice patch of grass, especially if there are wildflowers in proximity.</p>
                </ul>
            </div>

        </div>

        <ul className="about-me-icon-group"> 
            <ul> 
                <div className="about-me-icon"> <IoSpeedometerOutline/> </div>
                <p>I ensure fast loading speeds to optimize the user experience as well as facilitate easy navigation for persons all of technological literacy.</p>
            </ul>
            <ul className="reverse">
                <div className="about-me-icon"> <IoPhonePortraitSharp/> </div>
                <p>My interactive design adjusts to fit all screen sizes.</p>
            </ul>

            <ul>
                <div className="about-me-icon">  <HiSparkles/>  </div>
                <p>My keen eye for UI design contrributes towards a high yield of user engagement and overall satisfaction.</p>
            </ul>
        </ul>
    </section>
  )
}
