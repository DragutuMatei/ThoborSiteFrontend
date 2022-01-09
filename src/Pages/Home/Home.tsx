import React from "react";
import MemberList from "../../Components/Member/MemberList";
import Sponsors from "../../Components/Sponsors/Sponsors";
import Whatwedo from "../../Components/Whatwedo/whatwedo";
import Header from "../../Components/Heading/header";

function Home() {
  return (
    <div className="App">
      <Header />
      <Whatwedo />
      <MemberList />
      <Sponsors />
    </div>
  );
}

export default Home;
