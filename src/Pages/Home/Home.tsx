import React from "react";
import Member from "../../Components/Member/Member";
import Member_List from "../../Components/Member/Member_List";
import Sponsors from "../../Components/Sponsors/Sponsors";
import Whatwedo from "../../Components/Whatwedo/whatwedo";
import Header from "../../Components/Heading/header";

function Home() {
  return (
    <div className="App">
      <Header />
      <Whatwedo />
      <Member_List />
      <Sponsors />
      <div className="footer">
        <h1>Interested in working with us ?</h1>
        <button className="footer_button">
          <span>Let's Talk</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
