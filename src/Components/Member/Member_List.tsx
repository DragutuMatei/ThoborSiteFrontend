import React from 'react'
import Member from './Member';

function Member_List() {
    return (
        <div className="members">
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

export default Member_List;
