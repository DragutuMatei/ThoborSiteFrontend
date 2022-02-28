import React from "react";

function Whatwedo() {
  return(
  <div className="whatwedo" id="whatwedo">
    <h2>What We Do</h2>
    <hr></hr>
    <ul>
      <li>
        <img src={require("../../assets/Images/uiux.png").default} alt="ui/ux" />
        <h3>UI/UX</h3>
        <h4>Web designing and Web apps</h4>
      </li>
      <li>
        <img
          src={require("../../assets/Images/illustration.png").default}
          alt="illustration"
        />
        <h3>Illustration</h3>
        <h4>Designing and stuff like that.</h4>
      </li>
      <li>
        <img src={require("../../assets/Images/branding.png").default} alt="branding" />
        <h3>Branding</h3>
        <h4>Things like social media and stuff.</h4>
      </li>
      <li>
        <img
          src={require("../../assets/Images/development.png").default}
          alt="development"
        />
        <h3>Development</h3>
        <h4>Proggraming the robot.</h4>
      </li>
      <li>
        <img src={require("../../assets/Images/motion.png").default} alt="motion" />
        <h3>Motion</h3>
        <h4>2D Art combined with Blender and Fusion</h4>
      </li>
      <li>
        <img
          src={require("../../assets/Images/photography.png").default}
          alt="photography"
        />
        <h3>Photography</h3>
        <h4>Making photos.</h4>
      </li>
    </ul>
  </div>
  )
}

export default Whatwedo;
