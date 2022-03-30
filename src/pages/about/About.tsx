import React from "react";

function About() {
  return (
    <div className="about-page">
      <div className="about-heading">
        <h1>About</h1>
      </div>
      <div className="about-info">
        <div className="about1">
          <img
            src={require("../../assets/Images/about.svg").default}
            alt="about"
          />
          <div className="scris">
            <h2>Povestea noastra</h2>
            <p>
              Noi suntem echipa de robotică a Colegiului Național „Calistrat
              Hogaș”, Tecuci, formată din mentori, 15 liceeni și voluntari, iar
              noi îndrăznim să visăm împreună. Am început dintr-o zonă fără
              tradiție în domeniu și ne-am propus să aducem în comunitate un
              concept nou, care să propună perspective noi tinerilor. Thobor
              este o echipă unde adolescenții trăiesc această pasiune în
              comunitatea din acest mic oraș. Alături de superputerea noastră,
              STEAM, încercăm să arătăm celor din jurul nostru în ce se poate
              transforma pasiunea pentru știință. Echipa noastră este încântată
              să participe în al cincilea an al competiției First Tech Challenge
              România, sezonul 2022, Freight Frenzy. Educația STEAM este un
              acronim care vine de la cuvintele englezești: Science, Technology,
              Engineering, Art și Mathematics. Robotica îmbină eficient aceste
              discipline, conducând elevii pas cu pas prin descoperire, către
              obiectivul final, robotul, punând in practică un alt concept:
              Learning by doing!
            </p>

            <h3>Sezonul 1 (2017-2018)</h3>
            <p>
              Primul sezon la care am participat a fost cu siguranță un continuu
              proces de descoperire. Construirea unui robot, crearea unui cod,
              organizarea unui jurnal, formarea unei echipei compacte și
              eficiente, toate au fost o noutate pentru noi. Am învățat
              împreună, am învățat unul de la altul, am învățat ce înseamnă
              echipa. Premii: Think Award - locul I Control Award - locul II
            </p>

            <h3>Sezonul 2 (2018-2019)</h3>
            <p>
              Complexitatea competiției a crescut prin introducerea fazei
              regionale, miza fiind calificarea la etapa națională. Cele trei
              zile de concurs, desfășurate în martie, au solicitat la maxim
              resursele fizice și emoționale ale membrilor echipe. Faptul că am
              reușit să jucăm finala în divizia Vlaicu ne-a clasat astfel în
              primele 8 echipe din țară.
            </p>
          </div>
        </div>
        <div className="about2">
          <img
            src={require("../../assets/Images/about_2.svg").default}
            alt="about_2"
          />
          <div className="scris">
            <h3>Sezonul 3 (2019-2020)</h3>
            <p>
              Acest sezon a demarat cu un start putenic, echipa fiind reînnoită
              în proporție de 70%. Pentru prima dată am avut 2 roboți fiabili și
              funcționali, cu sisteme diferite și primul nostru Demo marca
              Thobor, aducând competiția în Tecuci. Datorită pandemiei am putut
              participa doar la etapa Regională Iași, unde am obținut cel mai
              important premiu al concursului: Inspire Award - locul I.
            </p>

            <h3>Sezonul 4 (2020-2021)</h3>
            <p>
              Al cincilea sezon FTC a reprezentat încă un an în sistem remote,
              parcursul echipei fiind lovit din plin de contextul pandemic,
              acest lucru ducând la anularea sau mutarea în mediul online a
              multor planuri prestabilite. În ciuda acestui fapt, am reușit sa
              obținem INSPIRE - locul II la etapa regională și să ne aflăm
              printre cele 24 de echipe participante la etapa națională,
              desfășurată fizic, obținând CONNECT - locul I
            </p>
          </div>
        </div>
        <div className="about_3">
          <img
            src={require("../../assets/Images/about_3.svg").default}
            alt="about_3"
          />
          <div className="scris">
            <h3>Sezonul 5 (2021-2022)</h3>
            <p>
              Sezonul curent ne-a adus alte noi provocări în cadrul echipei, pe
              care le-am materializat în premiul obținut la etapa regională
              MOTIVATE AWARD- locul I și calificarea la etapa națională.
            </p>
          </div>
        </div>
        <div className="about_4">
          <h1>
            Continuăm să scriem poveste..<span>.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
