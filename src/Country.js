import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import TextAd from "./TextAd.js";
import TABox from './TABox.js';
import {latLong} from './global.js';
import TABoxV2 from './TABoxV2.js';
import TAArray from './TAArray.js';
import axios from 'axios';


function Country({url}) {
    
  let { city, country } = useParams();
  
  const [locationId, setLocationId] = useState(null)
  // const [fullDetails, setFullDetails] = useState([])
  // const [fullImages, setFullImages] = useState([])
  
  useEffect( () => {

    let cityParam = latLong.filter( cityItem => cityItem.city === city)
    let countryParam = latLong.filter( countryItems => countryItems.country === country) 

    if (window.location.href.split("/").length > 5){
      const options = {method: 'GET', url: `https://europe.com/nearby-back`, params: {lat: cityParam[0].lat, long:cityParam[0].long}, headers: {Accept: 'application/json'}};

      axios.request(options).then((response) => {
        setLocationId(response.data)
      })  
      .catch(err => console.error(err));
    }
    else {
      const options = {method: 'GET', url: `https://europe.com/nearby-back`, params: {lat: countryParam[0].lat, long:countryParam[0].long}, headers: {Accept: 'application/json'}};

      axios.request(options).then((response) => {
        setLocationId(response.data)
      })  
      .catch(err => console.error(err));
    }
  }, [url, city, country])

  // function getFullDetails(response){
  //   if(fullDetails.length < 1){
  //     setFullDetails([response])
  //   }
  //   else{
  //     setFullDetails(fullDetails.push(response))
  //   }
  //   console.log(fullDetails)
  // }
  // function getFullImages(response){
  //   console.log(response)
  //   setFullImages(fullImages.push(response))
  // }
  // console.log(fullImages)
  // console.log(fullDetails)

  return (
    <>
    
    {locationId === null ? null : locationId.data.map( item => <TABox key={item.locationId} locationId={item.location_id} />) } 
    {/* {locationId === null ? null : <TABox locationId={locationId} />} */}
      
    </>
  );
}

export default Country;