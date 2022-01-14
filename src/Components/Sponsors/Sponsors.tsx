import React from "react";

function Sponsors() {
  return (
    <div className="sponsors">
      <h2>Sponsors</h2>
      <hr></hr>
      <h4>We traveled and spread the word with them.</h4>
      <div className="sponsor-list">
        <div className="sponsor">
          <img
            src={require("../../assets/Images/agrimat.png").default}
            alt="sp"
          />
        </div>
        <div className="sponsor">
          <img
            src={require("../../assets/Images/artesana.png").default}
            alt="sp"
          />
        </div>
        <div className="sponsor">
          <img
            src={require("../../assets/Images/condor.gif").default}
            alt="sp"
          />
        </div>
        <div className="sponsor">
          <img
            src={require("../../assets/Images/davide.jpg").default}
            alt="sp"
          />
        </div>
        <div className="sponsor">
          <img
            src={require("../../assets/Images/laparc.jpg").default}
            alt="sp"
          />
        </div>
        <div className="sponsor">
          <img
            src={require("../../assets/Images/marcoser.jpg").default}
            alt="sp"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
