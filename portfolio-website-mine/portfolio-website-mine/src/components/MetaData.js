import React from "react"
import Helmet from "react-helmet"

export default MetaData
function MetaData() {
    return (
      
      <Helmet>

        <title>LinkedIn | Naomi Portillo</title>
        <meta name="description" content="My name is Naomi Portillo and I am a web developer. Feel free to peruse through my work experiences."/>
        <meta name="keywords" content="Naomi Portillo"/>
        <meta name="robots" content="index, nofollow"/>
        <meta name="language" content="EN"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.linkedin.com/in/naomi-a-678013a2/"/>
        <meta property="og:title" content="Naomi Portillo LinkedIn"/>
        <meta property="og:description" content="My name is Naomi Portillo and I am a web developer. Feel free to peruse through my work experiences."/>

        <meta property="linkedin:card" content="summary_large_image"/>
        <meta property="linkedin:url" content="https://www.linkedin.com/in/naomi-a-678013a2/"/>
        <meta property="linkedin:title" content="Naomi Portillo LinkedIn"/>
        <meta property="linkedin:description" content="My name is Naomi Portillo and I am a web developer. Feel free to peruse through my work experiences."/>

      </Helmet>
    )
  }