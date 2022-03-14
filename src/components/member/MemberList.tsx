import React from 'react'
import Member from './Member';


function MemberList() {
    return (
      <div className="members" id="members">
        <h2>Echipa THOBOR</h2>
        <h3>Sezonul 2021-2022</h3>
        <hr></hr>
        <ul>
          <Member
            nume="Chiscop Robert Adrian"
            imagPath={"/Images/Robica.jpg"}
            departamente={["Team Leader", "Mecanica & Proiectare 3D"]}
          />
          <Member
            nume="Oprea Marcello Octavian"
            imagPath={"/Images/Marcelo.jpg"}
            departamente={["Marketing & PR"]}
          />
          <Member
            nume="Sevastre Beatrice Georgiana"
            imagPath={"/Images/Bebe.jpg"}
            departamente={["Marketing & PR"]}
          />
          <Member
            nume="Panaite Cristian Florin"
            imagPath={"/Images/Cristi.jpg"}
            departamente={["Programming"]}
          />
          <Member
            nume="Irimia Mihai"
            imagPath={"/Images/Miguel.jpg"}
            departamente={["Programming"]}
          />
          <Member
            nume="Drăguţu Matei"
            imagPath={"/Images/Osama.jpg"}
            departamente={["Programming", "Marketing & PR"]}
          />
          <Member
            nume="Donici Roberto Iulian"
            imagPath={"/Images/Robi.jpg"}
            departamente={["Mecanica & Proiectare 3D"]}
          />
          <Member
            nume="Borş Alexandru"
            imagPath={"/Images/Bors.jpg"}
            departamente={["Mecanica"]}
          />
          <Member
            nume="Borşan Claudiu Andrei"
            imagPath={"/Images/Claudiu.jpg"}
            departamente={["Driver", "Mecanica & Proiectare 3D"]}
          />
          <Member
            nume="Mereuţă Ionuţ Claudiu"
            imagPath={"/Images/Mereuta.jpg"}
            departamente={["Driver", "Mecanica & Proiectare 3D"]}
          />
          <Member
            nume="Popa Amira Cătălina"
            imagPath={"/Images/Amira.jpg"}
            departamente={["Jurnal & PR"]}
          />
          <Member
            nume="Mazilu Teodora Maria"
            imagPath={"/Images/Teodora.jpg"}
            departamente={["Jurnal & PR"]}
          />
          <Member
            nume="Popescu Robert Daniel"
            imagPath={"/Images/Popescu.jpg"}
            departamente={["Mecanica & Proiectare 3D"]}
          />
          <Member
            nume="Drăgan Claudia Maria"
            imagPath={"/Images/Claudia.jpg"}
            departamente={["Programming"]}
          />
          <Member
            nume="Epure Radu"
            imagPath={"/Images/Radu.jpg"}
            departamente={["Mecanica"]}
          />
        </ul>
      </div>
    );
}

export default MemberList;
