import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"
import TABox from './TABox.js';
import {latLong} from './global.js'
import axios from 'axios';


function Activity({url}) {
    
  let { activities } = useParams();
  const [locationId, setLocationId] = useState(null)

  useEffect( () => {

    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    if (activities === "hotels-paris"){
      const options = {method: 'GET', url: `https://europe.com/hotels-paris-back`, headers: {Accept: 'application/json'}};

      axios.request(options).then((response) => {
        setLocationId(response.data)
      })  
      .catch(err => console.error(err));
    }
    else if (activities === "hotels-barcelona"){
      const options = {method: 'GET', url: `https://europe.com/hotels-barcelona-back`, headers: {Accept: 'application/json'}};

      axios.request(options).then((response) => {
        setLocationId(response.data)
      })  
      .catch(err => console.error(err));
    }
    else if (activities === "restaurants-rome"){
      const options = {method: 'GET', url: `https://europe.com/restaurants-rome-back`, headers: {Accept: 'application/json'}};

      axios.request(options).then((response) => {
        setLocationId(response.data)
      })  
      .catch(err => console.error(err));
    }
  }, [url, activities])

  return (
    <>
        {locationId === null ? null : locationId.data.map( item => <TABox locationId={item.location_id}/>) }
    </>
  );
}

export default Activity;