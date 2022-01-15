import React from "react";
import Header from "../../components/heading/Header";
import Whatwedo from "../../components/whatwedo/Whatwedo";
import MemberList from "../../components/member/MemberList";
import Sponsors from "../../components/sponsors/Sponsors";
import Footer from "../../components/footer/Footer";

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
