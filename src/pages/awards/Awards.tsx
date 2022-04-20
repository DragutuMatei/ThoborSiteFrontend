import "./awards.scss";

function Awards() {
  return (
    <div className="award_page">
      <div className="award_heading">
        <h1>Awards</h1>
        <hr></hr>
      </div>
      <div className="awards">
        <ul>
          <li className="award-left">
            <img
              src={require("../../assets/Images/1.png").default}
              alt="premiu 1"
            />
            <div className="text">
              <h3>Inspire Award 1st Place</h3>
              <h4>BRD FIRST TECH CHALLENGE IAȘI – ONLINE JUDGMENT 2019-2020</h4>
            </div>
          </li>
          <li className="award-right">
            <img
              src={require("../../assets/Images/doi.png").default}
              alt="premiu 2"
            />
            <div className="text">
              <h3>Finalist Alliance 1st Pick Award</h3>
              <h4>BRD FIRST TECH CHALLENGE BUCUREȘTI 2018-2019</h4>
            </div>
          </li>
          <li className="award-left">
            <img
              src={require("../../assets/Images/trei.png").default}
              alt="premiu 3"
            />
            <div className="text">
              <h3>Compass Award 1st Place</h3>
              <h4>BRD FIRST TECH CHALLENGE BUCUREȘTI 2018-2019</h4>
            </div>
          </li>
          <li className="award-right">
            <img
              src={require("../../assets/Images/patru.png").default}
              alt="premiu 3"
            />
            <div className="text">
              <h3>Natie Prin Educatie Award 2nd Place</h3>
              <h4>BRD FIRST TECH CHALLENGE BUCUREȘTI 2018-2019</h4>
            </div>
          </li>
          <li className="award-left">
            <img
              src={require("../../assets/Images/cinci.png").default}
              alt="premiu 3"
            />
            <div className="text">
              <h3>Winning Alliance 1st Pick Award</h3>
              <h4>BRD FIRST TECH CHALLENGE IAȘI 2018-2019</h4>
            </div>
          </li>
          <li className="award-right">
            <img
              src={require("../../assets/Images/cinci.png").default}
              alt="premiu 3"
            />
            <div className="text">
              <h3>Winning Alliance 1st Pick Award</h3>
              <h4>BRD FIRST TECH CHALLENGE IAȘI 2018-2019</h4>
            </div>
          </li>
          <li className="award-left">
            <img
              src={require("../../assets/Images/sase.png").default}
              alt="premiu 3"
            />
            <div className="text">
              <h3>Inspire Award 2nd Place</h3>
              <h4>BRD FIRST TECH CHALLENGE IAȘI 2018-2019</h4>
            </div>
          </li>
          <li className="award-left">
            <img
              src={require("../../assets/Images/sapte.png").default}
              alt="premiu 3"
            />
            <div className="text">
              <h3>Winner Think Award</h3>
              <h4>BRD FIRST TECH CHALLENGE BUCUREȘTI 2017-2018</h4>
            </div>
          </li>
          <li className="award-left">
            <img
              src={require("../../assets/Images/opt.png").default}
              alt="premiu 3"
            />
            <div className="text">
              <h3>Control Award 2nd Place</h3>
              <h4>BRD FIRST TECH CHALLENGE BUCUREȘTI 2017-2018</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Awards;
