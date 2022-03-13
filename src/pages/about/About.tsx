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
              Echipa THOBOR a Colegiului Național “Calistrat Hogaş” Tecuci, este
              formată din douazeci si cinci de liceeni si doi mentori care ne
              indruma pe caile roboticii. Plecată dintr-o zonă fără tradiții în
              domeniu, echipa și-a propus să aducă în comunitate o idei noi,
              care să-i inspire pe toți colegii si care să deschidă noi
              orizonturi pentru copii. Echipa are deja o vechime de 5 ani și pe
              parcursul acestor ani am învățat că intr-adevar competitia First
              este un rollecoaster de emotii ce ne tine in priza si il pretuim
              mereu.
            </p>

            <h3>Sezonul 1 (2017-2018)</h3>
            <p>
              Primul an de competitie, acest an am putea să-l numim anul
              încercărilor. Eram siguri ca proiectul ne va ajută să fim
              inventivi și știam sigur că vom avea multe de învățat atât
              științific, cât și din punct de vedere al comunicării.De asemenea,
              munca în echipă ne-a oferit ocazia să ne descoperim pe noi înșine,
              să ne cunoaștem reciproc și să avem o altă perspectivă asupra
              roboticii. Tema propusă pentru sezonul de anul acesta este Relic
              Recovery , în care roboțelul trebuie să adune cuburi și să le
              plaseze într-un raft, numit Cryptobox. La finalul sezonului am
              fost bucuroși să vedem primele noastre premii Think Award și
              Control Award 2nd place,dar fericirea cea mai mare am simțit-o
              atunci când dupa toate eforturile am putut spune că ,în sfârșit,
              Tecuciul se află pe harta roboticii.
            </p>

            <h3>Sezonul 2 (2018-2019)</h3>
            <p>
              Al doilea an în competiție a fost un nou început cu forțe noi, dar
              și oameni noi. Complexitatea competiției crescuse prin
              introducerea fazei regionale din februarie 2019, având drept miză
              calificarea la etapa națională, dar nu am lăsat acest lucru să ne
              doboare. Am vrut să ne lăsam amprenta pe noua generație, așa că
              promovând valorile <b>FIRST</b>, echipa a fost prezentă în peste
              15 unități de învățământ din oraș și din localitățile din zonă,
              organizand workshopuri si cercuri de robotică,deschizând noi
              orizonturi și alternative de traseu educațional pentru copii. La
              sfârșitul acestui sezon, ne-am putut însuma rezultatele în
              portofoliu: <b>WINNING ALLIANCE</b>–first pick și{" "}
              <b>INSPIRE AWARD</b>
              -2nd place, <b>FINALIST ALLIANCE</b>–first pick,{" "}
              <b>COMPASS AWARD</b> și <b>Nație Prin Educație</b>-2nd place.
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
              Al treilea an in competie a fost consacrat de ingeniozitatea
              fostilor voluntari,acum membri care au venit cu noi idei si
              initiative inovative.In echipa am primit un copil cu o minte
              geniala ce nu a lasat ca deficientele sale fizice sa i impiedice
              spiritul.De la acesta am invatat ca vointa este elementul cheie in
              competitia First.In sezonul 3 am obtinut Inspire Award 1st Place.
            </p>

            <h3>Sezonul 4 (2020-2021)</h3>
            <p>
              Al patrulea an in competitie a fost unul al tranzitiilor.In primul
              rand multi membrii si au pregatit parasirea echipei prin pasarea
              mai departe a cunostintelor in mecanica,programare si
              proiectare.Apoi competitia First in sine a suferit schimbari din
              cauza pandemiei de Covid-19 majoritatea sezonului fiind desfasurat
              remote.Totusi nu am lasat aceste circumstante sa ne descurajeze si
              am dat ca intotdeauna 110 % din noi si am adus acasa *premii baga
              aici.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
