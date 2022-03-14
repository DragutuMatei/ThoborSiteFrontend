import React from "react";
import Member from "../../components/member/Member"
import "./alumniList.scss";


function AlumniList() {
  return (
    <div className="alumni-page">
      <div className="alumni-heading">
        <h2>Alumni</h2>
        <hr></hr>
      </div>
      <div className="alumni-list">
        <ul>
          <Member
            nume="Chiscop Robert Adrian"
            imagPath={"/Images/Robica.JPG"}
            departamente={["Team Leader", "Mecanica & Proiectare 3D"]}
          />
          <Member
            nume="Oprea Marcello Octavian"
            imagPath={"/Images/Marcelo.jpg"}
            departamente={["Marketing & PR"]}
          />
          <Member
            nume="Dragutu Matei"
            imagPath={"/Images/matei.jpg"}
            departamente={["Programming", "Marketing & PR"]}
          />
          <Member
            nume="Dragutu Matei"
            imagPath={"/Images/matei.jpg"}
            departamente={["Programming", "Marketing & PR"]}
          />
          <Member
            nume="Dragutu Matei"
            imagPath={"/Images/matei.jpg"}
            departamente={["Programming", "Marketing & PR"]}
          />
          <Member
            nume="Uratul Matei"
            imagPath={"/Images/matei.jpg"}
            departamente={["Programming", "Marketing & PR"]}
          />
        </ul>
      </div>
    </div>
  );
}

export default AlumniList;
