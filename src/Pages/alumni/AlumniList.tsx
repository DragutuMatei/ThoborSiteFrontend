import React from "react";
import Member from "../../Components/Member/Member";
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
        </ul>
      </div>
    </div>
  );
}

export default AlumniList;
