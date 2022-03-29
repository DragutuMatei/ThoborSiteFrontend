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
          <hr></hr>
          <li className="award-left">
            <img
              src={require("../../assets/Images/1.png").default}
              alt="premiu 1"
            />
            <div className="text">
              <h3>2nd Place Chestie</h3>
              <h4>09.09.2102</h4>
            </div>
          </li>
          <li className="award-right">
            <img
              src={require("../../assets/Images/1.png").default}
              alt="premiu 1"
            />
            <div className="text">
              <h3>1st Place Award</h3>
              <h4>11.12.2029</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Awards;
