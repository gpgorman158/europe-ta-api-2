import React, {useState} from 'react'
import { Link } from "react-router-dom";

function LeftMenu({onCountryClick}) {
    const [counties, setCountries] = useState(["France","Spain", "Italy", "Turkey", "Germany", "United Kingdom", "Austria", "Greece", "Netherlands", "Portugal"])

    function handleClick(e){
      onCountryClick(e.target.href)
    }
    
  return (
    <div className="left-menu">
      <h1 className="topic">Top Tourist Destinations in Europe</h1>
      <div className="list">{counties.map((country, index) => <ul key={index}>{index + 1}. <Link to={`/country/${country}`} onClick={handleClick} >{country}</Link></ul>)}</div>
      
    </div>
  );
}

export default LeftMenu;