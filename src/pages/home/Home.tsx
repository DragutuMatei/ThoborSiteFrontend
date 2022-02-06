import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/heading/Header";
import Whatwedo from "../../components/whatwedo/Whatwedo";
import MemberList from "../../components/member/MemberList";
import Sponsors from "../../components/sponsors/Sponsors";

function Home() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header />
      <Whatwedo />
      <MemberList />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
