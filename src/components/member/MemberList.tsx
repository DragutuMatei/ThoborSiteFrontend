import React from "react";
import Member from "./Member";

function MemberList() {
  return (
    <div className="members" id="members">
      <h2>Echipa THOBOR</h2>
      <h3>Sezonul 2021-2022</h3>
      <hr></hr>
      <ul>
        <Member
          key={1}
          nume="Chiscop Robert Adrian"
          imagPath={"/Images/Robica.jpg"}
          departamente={["Team Leader", "Mecanica & Proiectare 3D"]}
        />
        <Member
          key={2}
          nume="Oprea Marcello Octavian"
          imagPath={"/Images/Marcelo.jpg"}
          departamente={["Marketing & PR"]}
        />
        <Member
          key={3}
          nume="Sevastre Beatrice Georgiana"
          imagPath={"/Images/Bebe.jpg"}
          departamente={["Marketing & PR"]}
        />
        <Member
          key={4}
          nume="Panaite Cristian Florin"
          imagPath={"/Images/Cristi.jpg"}
          departamente={["Programming"]}
        />
        <Member
          key={5}
          nume="Irimia Mihai"
          imagPath={"/Images/Miguel.jpg"}
          departamente={["Programming"]}
        />
        <Member
          key={6}
          nume="Drăguţu Matei"
          imagPath={"/Images/Osama.jpg"}
          departamente={["Programming", "Marketing & PR"]}
        />
        <Member
          key={7}
          nume="Donici Roberto Iulian"
          imagPath={"/Images/Robi.jpg"}
          departamente={["Mecanica & Proiectare 3D"]}
        />
        <Member
          key={8}
          nume="Borş Alexandru"
          imagPath={"/Images/Bors.jpg"}
          departamente={["Mecanica"]}
        />
        <Member
          key={9}
          nume="Borşan Claudiu Andrei"
          imagPath={"/Images/Claudiu.jpg"}
          departamente={["Driver", "Mecanica & Proiectare 3D"]}
        />
        <Member
          key={10}
          nume="Mereuţă Ionuţ Claudiu"
          imagPath={"/Images/Mereuta.jpg"}
          departamente={["Driver", "Mecanica & Proiectare 3D"]}
        />
        <Member
          key={11}
          nume="Popa Amira Cătălina"
          imagPath={"/Images/Amira.jpg"}
          departamente={["Jurnal & PR"]}
        />
        <Member
          key={12}
          nume="Mazilu Teodora Maria"
          imagPath={"/Images/Teodora.jpg"}
          departamente={["Jurnal & PR"]}
        />
        <Member
          key={13}
          nume="Popescu Robert Daniel"
          imagPath={"/Images/Popescu.jpg"}
          departamente={["Mecanica & Proiectare 3D"]}
        />
        <Member
          key={14}
          nume="Drăgan Claudia Maria"
          imagPath={"/Images/Claudia.jpg"}
          departamente={["Programming"]}
        />
        <Member
          key={15}
          nume="Epure Radu"
          imagPath={"/Images/Radu.jpg"}
          departamente={["Mecanica"]}
        />
      </ul>
    </div>
  );
}

export default MemberList;
