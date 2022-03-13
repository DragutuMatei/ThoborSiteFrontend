import React from "react";

function Whatwedo() {
  return (
    <div className="whatwedo" id="whatwedo">
      <h2>What We Do</h2>
      <hr></hr>
      <ul>
        <li>
          <img
            src={require("../../assets/Images/uiux.png").default}
            alt="ui/ux"
          />
          <h3>UI/UX</h3>
          <h4>Web designing and Web apps</h4>
        </li>
        <li>
          <img
            src={require("../../assets/Images/illustration.png").default}
            alt="illustration"
          />
          <h3>Illustration</h3>
          <h4>We provide visual representations of our work</h4>
        </li>
        <li>
          <img
            src={require("../../assets/Images/branding.png").default}
            alt="branding"
          />
          <h3>Branding</h3>
          <h4>We give meaning to our team</h4>
        </li>
        <li>
          <img
            src={require("../../assets/Images/development.png").default}
            alt="development"
          />
          <h3>Development</h3>
          <h4>Always Evolving our techniques</h4>
        </li>
        <li>
          <img
            src={require("../../assets/Images/motion.png").default}
            alt="motion"
          />
          <h3>Motion</h3>
          <h4>2D and 3D Art made with Blender and Fusion</h4>
        </li>
        <li>
          <img
            src={require("../../assets/Images/photography.png").default}
            alt="photography"
          />
          <h3>Photography</h3>
          <h4>Incrementing precious moments</h4>
        </li>
      </ul>
    </div>
  );
}

export default Whatwedo;
