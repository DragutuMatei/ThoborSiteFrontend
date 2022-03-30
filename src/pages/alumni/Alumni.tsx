import React from 'react'

interface propsAlumni {
    imagPath: string;
    descriere: string;
    nume: string;
    facultate: string;
  }

function Alumni({ imagPath, descriere, nume, facultate }: propsAlumni) {
  return (
    <div className='alumni'>
        <img src={imagPath} alt="alumni" />
        <p>{descriere}</p>
        <h3>{nume}</h3>
        <h4>{facultate}</h4>
    </div>
  )
}

export default Alumni;