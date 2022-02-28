import React from 'react'
import Member from './Member';


function MemberList() {
    return (
        <div className="members" id="members">
        <h2>Echipa THOBOR</h2>
        <h3>Sezonul 2021-2022</h3>
        <hr></hr>
        <ul>
          <Member nume="Dragutu Matei" imagPath={"/Images/matei.jpg"} departamente={["Programming","Marketing & PR"]} />
          <Member nume="Dragutu Matei" imagPath={"/Images/matei.jpg"} departamente={["Programming","Marketing & PR"]} />
          <Member nume="Dragutu Matei" imagPath={"/Images/matei.jpg"} departamente={["Programming","Marketing & PR"]} />
          <Member nume="Dragutu Matei" imagPath={"/Images/matei.jpg"} departamente={["Programming","Marketing & PR"]} />
          <Member nume="Dragutu Matei" imagPath={"/Images/matei.jpg"} departamente={["Programming","Marketing & PR"]} />
        </ul>
      </div>
    )
}

export default MemberList;
