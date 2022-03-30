import React from "react";
import Alumni from "./Alumni";
import "./alumniList.scss";

function AlumniList() {
  return (
    <div className="alumni-page">
      <div className="alumni-heading">
        <h2>Alumni</h2>
      </div>
      <div className="alumni-list">
        <Alumni
          key={1}
          nume="Dragutu Matei"
          imagPath={"/Images/Claudia.jpg"}
          descriere="Hai sa traiesti."
          facultate="Facultatea de Inginerie Mecanica si Automatizare"
        />
        <Alumni
          key={2}
          nume="Dragutu Matei"
          imagPath={"/Images/Claudia.jpg"}
          descriere="Hai sa traiesti."
          facultate="Facultatea de Inginerie Mecanica si Automatizare"
        />
        <Alumni
          key={3}
          nume="Dragutu Matei"
          imagPath={"/Images/Claudia.jpg"}
          descriere="Hai sa traiesti."
          facultate="Facultatea de Inginerie Mecanica si Automatizare"
        />
      </div>
    </div>
  );
}

export default AlumniList;
