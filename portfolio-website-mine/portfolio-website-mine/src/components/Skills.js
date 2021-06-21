import * as React from "react"

export default Skills
function Skills(props) {
  return (
    <section className={props.hide ? 'skills skills-show' : 'skills'}ref={props.reference} id="Skills">
      <h2> Skills</h2>
      <div className="skills-container">
        <div className="skills-group">
          
          <h3> HTML/CSS </h3>
          <h3> React/JSON</h3>
          <h3> jQuery </h3>
          <h3> Bootstrap </h3>
          <h3> Python </h3>
          <h3> Pandas/NumPy </h3>
          <h3> Javascript </h3>
        </div>
      </div>
    </section>
  )
}