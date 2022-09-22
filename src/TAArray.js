import React, { useEffect, useState } from 'react'
import TABoxV2 from './TABoxV2.js'

function TAArray ( {locationId} ) {
    const [item, setItem] = useState(null)
    const [itemImages, setItemImages] = useState(null)
    const [fullDetailArray, setFullDetailArray] = useState([])

    console.log(fullDetailArray)
    // const { name, brand, address_obj, category, subcategory, rating, rating_image_url, price_level, description } = item;

    useEffect( () => {

        let thing = [];

        locationId.map( id => {

        const options = {method: 'GET', headers: {Accept: 'application/json'}};
        
        fetch(`https://api.content.tripadvisor.com/api/v1/location/${id.location_id}/details?language=en&currency=USD&key=D8942E614BA64F8D8A5DBA66B6D80449`, options)
        .then(response => response.json())
        .then(response => thing.push(response))
        .catch(err => console.error(err));
        })

        setFullDetailArray(thing)
    }, [locationId])
        
    // .sort((a, b) => a.ranking_data.ranking - b.ranking_data.ranking)

    // useEffect( () => {
    //     const options = {method: 'GET', headers: {Accept: 'application/json'}};

    //     fetch(`https://api.content.tripadvisor.com/api/v1/location/${locationId[0].location_id}/details?language=en&currency=USD&key=D8942E614BA64F8D8A5DBA66B6D80449`, options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    // }, [locationId])

    // useEffect( () => {
    //     const options = {method: 'GET', headers: {Accept: 'application/json'}};

    //     fetch(`https://api.content.tripadvisor.com/api/v1/location/${locationId[0].location_id}/photos?language=en&key=D8942E614BA64F8D8A5DBA66B6D80449`, options)
    //     .then(response => response.json())
    //     .then(response => console.log(response.data))
    //     .catch(err => console.error(err));
    // }, [locationId])
    
    return (<TABoxV2 fullDetailArray={fullDetailArray}/>);
}
        
export default TAArray;