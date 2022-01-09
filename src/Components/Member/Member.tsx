import React from "react";

interface propsMember {
  imagPath: string;
  nume: string;
  departamente?: string[];
}

function Member({ imagPath, nume, departamente }: propsMember) {
  

  return (
    <li>
      <img src={imagPath} alt="membru" />
      <h4>{nume}</h4>
      {departamente &&
        departamente.map((departament) => <h5> {departament}</h5>)}
    </li>
  );
}


export default Member;
