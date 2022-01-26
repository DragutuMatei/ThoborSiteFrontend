import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/heading/Header";
import MemberList from "../../Components/Member/MemberList";
import Sponsors from "../../Components/Sponsors/Sponsors";
import Whatwedo from "../../Components/whatwedo/Whatwedo";

function Home() {
  return (
    <div className="App">
      <Header />
      <Whatwedo />
      <MemberList />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
