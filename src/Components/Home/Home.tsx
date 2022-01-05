import React from "react";
import './home.scss';

function Home() {
  return (
    <div className="App">
      <img
        src={require("../Images/bg.svg").default}
        className="bg"
        alt="logo"
      />

      <div className="heading">
        <h1>We are THOBOR</h1>
        <h3>A team of eleves and elevs from Tecuci</h3>
      </div>
      <div className="whatwedo">
        <h2>What We Do</h2>
        <hr></hr>
        <ul>
          <li>
            <img
              src={require("../Images/uiux.png").default}
              alt="ui/ux"
            />
            <h3>UI/UX</h3>
            <h4>Web designing and Web apps</h4>
          </li>
          <li>
            <img
              src={require("../Images/illustration.png").default}
              alt="illustration"
            />
            <h3>Illustration</h3>
            <h4>Designing and stuff like that.</h4>
          </li>
          <li>
            <img
              src={require("../Images/branding.png").default}
              alt="branding"
            />
            <h3>Branding</h3>
            <h4>Things like social media and stuff.</h4>
          </li>
          <li>
            <img
              src={require("../Images/development.png").default}
              alt="development"
            />
            <h3>Development</h3>
            <h4>Proggraming the robot.</h4>
          </li>
          <li>
            <img
              src={require("../Images/motion.png").default}
              alt="motion"
            />
            <h3>Motion</h3>
            <h4>2D Art combined with Blender and Fusion</h4>
          </li>
          <li>
            <img
              src={require("../Images/photography.png").default}
              alt="photography"
            />
            <h3>Photography</h3>
            <h4>Making photos.</h4>
          </li>
        </ul>
      </div>
      <div className="members">
        <h2>Echipa THOBOR</h2>
        <h3>Sezonul 2021-2022</h3>
        <hr></hr>
        <ul>
          <li>
            <img
              src={require("../Images/matei.jpg").default}
              alt="membru"
            />
            <h4>Dragutu Matei</h4>
            <h5>Programare</h5>
          </li>
          <li>
            <img
              src={require("../Images/matei.jpg").default}
              alt="membru"
            />
            <h4>Dragutu Matei</h4>
            <h5>Programare</h5>
          </li>
          <li>
            <img
              src={require("../Images/matei.jpg").default}
              alt="membru"
            />
            <h4>Dragutu Matei</h4>
            <h5>Programare</h5>
          </li>
          <li>
            <img
              src={require("../Images/matei.jpg").default}
              alt="membru"
            />
            <h4>Dragutu Matei</h4>
            <h5>Programare</h5>
          </li>
          <li>
            <img
              src={require("../Images/matei.jpg").default}
              alt="membru"
            />
            <h4>Dragutu Matei</h4>
            <h5>Programare</h5>
          </li>
          <li>
            <img
              src={require("../Images/matei.jpg").default}
              alt="membru"
            />
            <h4>Dragutu Matei</h4>
            <h5>Programare</h5>
          </li>
        </ul>
      </div>
      <div className="sponsors">
        <h2>Sponsors</h2>
        <hr></hr>
        <h4>We traveled and spread the word with them.</h4>
        <div className="sponsor">
          <div className="lol">
            <img
              src={require("../Images/agrimat.png").default}
              alt="sp"
            />
          </div>
          <div className="lol2">
            <img
              src={require("../Images/artesana.png").default}
              alt="sp"
            />
          </div>
          <div className="lol3">
            <img
              src={require("../Images/condor.gif").default}
              alt="sp"
            />
          </div>
          <div className="lol4">
            <img
              src={require("../Images/davide.jpg").default}
              alt="sp"
            />
          </div>
          <div className="lol5">
            <img
              src={require("../Images/laparc.jpg").default}
              alt="sp"
            />
          </div>
          <div className="lol6">
            <img
              src={require("../Images/marcoser.jpg").default}
              alt="sp"
            />
          </div>
          <div className="lol7">
            <img
              src={require("../Images/ptg.JPG").default}
              alt="sp"
            />
          </div>
          <div className="lol8">
            <img
              src={require("../Images/valvi.gif").default}
              alt="sp"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>Interested in working with us ?</h1>
        <button className="footer_button">
          <span>Let's Talk</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
