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
          nume="Alex Băraru"
          imagPath={"/Images/bararu.png"}
          descriere="Experiența dată de participarea în echipa de robotică m-a făcut să
        percep altfel lumea. Mi-a dezvoltat un alt mod de gândire și am
        asimilat informații de o foarte mare importanță pentru viitorul
        meu ca student și viitor angajat. Principiile FTC și familia
        Thobor mă fac să mă gândesc mereu la liceu cu un mare zâmbet pe
        buze și extaz în suflet."
          facultate="American Hotel Academy - Events"
        />
        <Alumni
          key={2}
          nume="Elisa Chicoș"
          imagPath={"/Images/elisa.png"}
          descriere="Mi-am făcut prieteni foarte buni în aceasta echipă dar nu numai. Am învățat cum să mă distrez muncind și cum să-mi spun punctul de vedere. Am acumulat foarte multe informații utile și mi-am dezvoltat aptitudini pe care nu știam că le pot avea și care îmi vor fi de folos în viitor."
          facultate="Universitatea Alexandru Ioan Cuza Iași"
        />
        <Alumni
          key={3}
          nume="Cosmin Ciolacu"
          imagPath={"/Images/cosmin.png"}
          descriere="Să fac parte din echipa de robotică a fost și va rămâne cea mai grozavă experiență pe care am avut-o. Chiar dacă am participat doar un sezon am învățat multe lucrucri, de la cum se programează un robot până la cum este să faci parte dintr-un mic start-up."
          facultate="Facultatea de Matematică și Informatică"
        />
        <Alumni
          key={4}
          nume="Cătălina Radu"
          imagPath={"/Images/catalina.png"}
          descriere="Aici am înațat cele mai importante softskill-uri în perioada liceului. Recunosc, credeam ca va fi o joacă de copii, o diplomă care se ia usor și care va da bine la dosar însă s-a dovedit a fi cea mai prețioasă experiență a mea. Aici, alături de echipa mea am învățat ce înseamnă să te dedici cu adevărat, ce sunt deadlineurile și cât de importantă este munca în echipă."
          facultate="Academia de Studii Economice - Cibernetică"
        />
        <Alumni
          key={5}
          nume="Alexandru Lupu"
          imagPath={"/Images/lupu.png"}
          descriere="Thobor nu este o simplă echipă de robotică, Thobor este o familie. Experiența în cadrul BRD First Tech Challenge m-a învățat să construiesc roboți, să îi programez, dar cel mai important m-a învățat să colaborez cu cei din jurul meu și să privesc adversarul ca pe cel mai bun coechipier."
          facultate="Facultatea de Inginerie Aerospațială"
        />
        <Alumni
          key={6}
          nume="Viorica Spăsenie"
          imagPath={"/Images/viorica.png"}
          descriere="Recunosc că la început am privit cu scepticism ideea de a face parte din această echipă cât și de a participa la un concurs de o asemenea amploare. Acum, când stau să privesc în urma, realizez că aș fi făcut o greșeală foarte mare daca aș fi spus nu."
          facultate="Academia de Studii Economice București"
        />
        <Alumni
          key={7}
          nume="Danut Panaite"
          imagPath={"/Images/danut.png"}
          descriere="Datorită acestei echipe formată din oameni dornici de muncă și în stare să viseze la ceva mai mult, pe care mă bucur că pot să îi numesc prieteni, sfârșitul anilor de liceu nu a fost unul trist, ci glorios. Aș fi vrut să mai particip la competiție alături de Thobor și în sezonul al III-lea, să simțim iar bucuria reușitei sau dezamăgirea unui lucru care n-a mers cum ne-am plănuit, dar care reușea să ne unească și mai mult. Competiția mi-a arătat că putem face și visa mai mult, aici, în Romania, și m-a ajutat să văd cu ochii mei cum programarea prinde viață prin intermediul robotului construit."
          facultate="Facultatea de Matematica si Informatica Bucuresti"
        />
        <Alumni
          key={8}
          nume="Andrei Munteanu"
          imagPath={"/Images/andrei.png"}
          descriere="Thobor m-a ajutat foarte mult să mă dezvolt pe mai multe planuri. Cel mai important lucru a fost lucrul în echipă. Am reușit să înțeleg care este cel mai important la o echipă e prietenia și comunicarea. O relație de prietenie îmbunătățește dinamica echipei. Echipa m-a ajutat să am mai multă încredere în mine și să îmi spun clar ideile chiar dacă nu sunt cele mai bune. Timpul petrecut împreună m-a învățat că aparențele înșeală și că oricine poate ajunge sus. Cele mai importante persoane au fost mentorii ce ne-au ajutat să ne găsim ideile și să rezolvăm problemele întâmpinate, fiind alaturi de noi pas cu pas."
          facultate="Universitatea Politehnică din București"
        />
      </div>
    </div>
  );
}

export default AlumniList;
