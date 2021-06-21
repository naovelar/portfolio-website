import React, {useState, useLayoutEffect, useRef} from "react";

import Hero from "./components/hero"
import Aboutme from "./components/Aboutme"
import Sidebar from "./components/Sidebar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import MetaData from "./components/MetaData"
import 'firebase/auth';

export default Main
function Main() {

  const [show, doShow] = useState({
    heroAndSidebarTransition: false,
    aboutMeTransition: false,
    skillsTransition: false,
    projectsTransition:false, 
  });

  const ourRef = useRef(null),
  twoRef = useRef(null);

useLayoutEffect(() => { 
    const topPos = element => element.getBoundingClientRect().y;
    // current postions of the refs
    const divPos = topPos(ourRef.current);
    const divPos2 = topPos(twoRef.current);

     const onScroll = () => {
        // window scroll
        const scrollPos = window.scrollY;
        
        const elementAlignment = window.scrollY - window.screen.availHeight * 0.6
        //elementAlignment is to make sure that the transtion happens the right way on on screens

        if (scrollPos > 5) {
            doShow(state => ({ ...state, heroAndSidebarTransition: true }));
            doShow(state => ({ ...state, aboutMeTransition: true }));
        }
        else {
            doShow(state => ({ ...state, heroAndSidebarTransition: false }));
        }
        if (scrollPos > divPos + elementAlignment) {
            doShow(state => ({ ...state, skillsTransition: true }));
        }
        if (scrollPos> divPos2 + elementAlignment) {
            doShow(state => ({ ...state, projectsTransition: true }));
        }

    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
})
   return (
    <main>
      <Sidebar hide={show.heroAndSidebarTransition} />
      <Hero hide={show.heroAndSidebarTransition}> </Hero> {/*This will hide the hero component when it reaches a certain scroll pos*/}
      <Aboutme hide={show.aboutMeTransition}/>
      <Skills reference={ourRef} hide={show.skillsTransition}/>
      <Projects reference={twoRef} hide={show.projectsTransition}/>
      <Footer/>
      <MetaData/>
    </main>
  )
}