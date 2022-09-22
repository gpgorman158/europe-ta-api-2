import React from 'react'
import { Link } from "react-router-dom";
import {latLong} from './global.js'

function Footer({url, onFooterClick}) {

    function handleClick(e){
        onFooterClick(e.target.href)
    }
    let countries = latLong.slice(0,24)
    const uniqueValuesSet = new Set();
    const filteredArr = countries.filter((obj) => {
        const isPresentInSet = uniqueValuesSet.has(obj.country);
        uniqueValuesSet.add(obj.country);
        return !isPresentInSet;
    });
  return (
    <div className="footer">
        
        {filteredArr.map((country, index) => {
            let counter = 0;
            
            let bigthing = <div key={index} className='footer-item'>
                <p>Top Cities in {country.country}</p>
                <ul>
                
                {latLong.slice(0,790).map((city, index) => {
                    
                    if (city.country === country.country && counter < 5){
                            let thing = <Link to={`/country/${city.country}/${city.city}`} key={index} onClick={handleClick}><li>{city.city}</li></Link>
                            counter++;
                            return thing;
                    }
                    })
                }
                </ul>
            </div>
            return bigthing;
        })
        }
        {/* <div className='footer-item'>
            <p>Top Cities in France</p>
            <ul>
                <Link to ="country/France/Paris" onClick={handleClick}><li>Paris</li></Link>
                <Link to ="country/France/Nice" onClick={handleClick}><li>Nice</li></Link>
            </ul>
        </div>
        <div className='footer-item'>
            <p>Top Cities in Spain</p>
            <ul>
                <Link to ="country/Spain/Madrid" onClick={handleClick}><li>Madrid</li></Link>
                <Link to ="country/Spain/Barcelona" onClick={handleClick}><li>Barcelona</li></Link>
            </ul>
        </div>
        <div className='footer-item'>
            <p>Top Cities in Italy</p>
            <ul>
                <Link to ="country/Italy/Milan" onClick={handleClick}><li>Milan</li></Link>
                <Link to ="country/Italy/Venice" onClick={handleClick}><li>Venice</li></Link>
            </ul>
        </div>
        <div className='footer-item'>
            <p>Top Cities in Turkey</p>
            <ul>
                <Link to ="country/Turkey/Istanbul" onClick={handleClick}><li>Istanbul</li></Link>
                <Link to ="country/Turkey/Ankara" onClick={handleClick}><li>Ankara</li></Link> 
            </ul>
        </div>
        <div className='footer-item'>
            <p>Top Cities in Germany</p>
            <ul>
                <Link to ="country/Germany/Berlin" onClick={handleClick}><li>Berlin</li></Link>
                <Link to ="country/Germany/Munich" onClick={handleClick}><li>Munich</li></Link> 
            </ul>
        </div>
        <div className='footer-item'>
            <p>Top Cities in the UK</p>
            <ul>
                <Link to ="country/UK/London" onClick={handleClick}><li>London</li></Link>
                <Link to ="country/UK/Birmingham" onClick={handleClick}><li>Birmingham</li></Link> 
            </ul>
        </div>
        <div className='footer-item'>
            <p>Top Cities in Austria</p>
            <ul>
                <Link to ="country/Austria/Vienna" onClick={handleClick}><li>Vienna</li></Link>
                <Link to ="country/Austria/Graz" onClick={handleClick}><li>Graz</li></Link> 
            </ul>
        </div>
        <div className='footer-item'>
            <p>Top Cities in Greece</p>
            <ul>
                <Link to ="country/Greece/Athens" onClick={handleClick}><li>Athens</li></Link>
                <Link to ="country/Greece/Thessaloniki" onClick={handleClick}><li>Thessaloniki</li></Link> 
            </ul>
        </div> */}
    </div>
  );
}

export default Footer;