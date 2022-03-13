import React from "react";

function Sponsors() {
  return (
    <div className="sponsors" id="sponsors">
      <h2>Sponsors</h2>
      <hr></hr>
      <h4>Oamenii care ne fac posibil visul</h4>
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
