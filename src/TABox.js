import React, { useEffect, useState } from 'react'
import axios from 'axios';

function TABox ( {locationId, getFullDetails, getFullImages}) {
    const [item, setItem] = useState(null)
    const [itemImages, setItemImages] = useState(null)

    useEffect( () => {
        const options = {method: 'GET', url: `https://europe.com/details`, params: {location: locationId}, headers: {Accept: 'application/json'}};

        axios.request(options).then((response) => {
            setItem(response.data)
        })  
        .catch(err => console.error(err));
       

        const options2 = {method: 'GET', url: `https://europe.com/images`, params: {location: locationId}, headers: {Accept: 'application/json'}};

        axios.request(options2).then((response) => {
            setItemImages(response.data)
        })  
        .catch(err => console.error(err));

    }, [locationId])

    return (
        
        <div className="TABox">
            {item !== null && itemImages !== null ? <>
            <div className="TA-images">
                <div>{itemImages.data[0] && itemImages.data[0].images ? <img src={itemImages.data[0].images.large.url}/> : <img src={'../Europe-Logo-main-blue.png'} alt="Europe.com Logo"/>}</div>
                {/* <div>{itemImages.data ? <img src={itemImages.data[0].images.medium.url}></img> : null}</div> */}
            </div>
            <div className="TA-content">
                <h3>{item.name ? item.name : null} <span>{item.brand ? "(" + item.brand + ")": null}</span></h3>
                <h5>{item.address_obj ? item.address_obj.city + ", " + item.address_obj.country : null}</h5>
                {/* <p>{item.category !== false ? "Category: " + item.category.name : null}</p> */}
                <div>{item.subcategory ? item.subcategory.name : null}</div>
                <div className="rating">
                    <div className="rating-text"><u>Rating</u>
                            <div className="rating-horizontal">
                                {item.rating_image_url ? <img src={item.rating_image_url} alt={item.name}/>: null}
                                <div className="number-rating">{item.rating ? "(" + item.rating + ")": null}</div>
                            </div>
                    </div>
                    <div><u>Price</u>
                        <div style={{color:"#FBB03B"}}>{item.price_level ? item.price_level : null}</div>
                    </div>
                </div>
                <p>{item.description ? item.description.slice(0,260) + " ..." : null}</p>
                <a href={item.web_url} target="_blank">More Info</a>
            </div>
            <div className="TA-review">
                <div className="number">{item.ranking_data ? item.ranking_data.ranking_string.split(" ", 1) : null}</div>
                <div>{item.ranking_data ? item.ranking_data.ranking_string.split(" ").slice(1).map( word => word + " ") : null}</div>     
            </div>
            </> 
            : null}
        </div>  
        
    );
}
    
export default TABox;