import React from "react";
import "./alumniList.scss";


function AlumniList() {
  return (
    <div className="alumni-page">
      <div className="alumni-heading">
        <h2>Alumni</h2>
      </div>
      <div className="alumni-list">
        <div className="alumni">
          <img
            src={require("../../assets/Images/matei.jpg").default}
            alt="matei"
          />
          <h3>Dragutu Matei</h3>
          <h4>Facultatea de Inginerie</h4>
          <hr></hr>
          <p>"Am fost si am plecat"</p>
        </div>
        <div className="alumni">
          <img
            src={require("../../assets/Images/matei.jpg").default}
            alt="matei"
          />
          <h3>Dragutu Matei</h3>
          <h4>Facultatea de Inginerie</h4>
          <hr></hr>
          <p>"Am fost si am plecat"</p>
        </div>
        <div className="alumni">
          <img
            src={require("../../assets/Images/matei.jpg").default}
            alt="matei"
          />
          <h3>Dragutu Matei</h3>
          <h4>Facultatea de Inginerie</h4>
          <hr></hr>
          <p>"Am fost si am plecat"</p>
        </div>
      </div>
    </div>
  );
}

export default AlumniList;
