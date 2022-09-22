import React, { useEffect, useState } from 'react'

function TABoxV2 ( {locationId} ) {
    const [item, setItem] = useState(null)
    const [itemImages, setItemImages] = useState(null)
    const [fullDetailArray, setFullDetailArray] = useState([])

    useEffect( () => {

        const options = {method: 'GET', headers: {Accept: 'application/json'}};

        locationId.map( id => {
        fetch(`https://api.content.tripadvisor.com/api/v1/location/${id.location_id}/details?language=en&currency=USD&key=D8942E614BA64F8D8A5DBA66B6D80449`, options)
        .then(response => response.json())
        .then(response => setFullDetailArray([...response]))
        .catch(err => console.error(err));
        })

    }, [locationId])

    console.log(fullDetailArray)
    return (
        <>
        {fullDetailArray.map( item => (
        <div className="TABox">
            {item !== null && itemImages !== null ? <>
            <div className="TA-images">
                {/* <div>{itemImages.data[0] ? <img src={itemImages.data[0].images.large.url}/> : <img src={'../Europe-Logo-main-blue.png'} alt="Europe.com Logo"/>}</div> */}
                {/* <div>{itemImages.data ? <img src={itemImages.data[0].images.medium.url}></img> : null}</div> */}
            </div>
            <div className="TA-content">
                <h3>{item.name ? item.name : null} <span>{item.brand ? "(" + item.brand + ")": null}</span></h3>
                <h5>{item.address_obj ? item.address_obj.city + ", " + item.address_obj.country : null}</h5>
                {/* <p>{item.category !== false ? "Category: " + item.category.name : null}</p> */}
                <div>{item.subcategory ? item.subcategory.name : null}</div>
                <div className="rating">
                    <div>Rating
                            <div className="rating-horizontal">
                                {item.rating_image_url ? <img src={item.rating_image_url} alt={item.name}/>: null}
                                <div>{item.rating ? "(" + item.rating + ")": null}</div>
                            </div>
                    </div>
                    <div>Price 
                        <div style={{color:"#FBB03B"}}>{item.price_level ? item.price_level : null}</div>
                    </div>
                </div>
                <p>{item.description ? item.description.slice(0,240) + "..." : null}</p>
            </div>
            <div className="TA-review">
                <div className="number">{item.ranking_data ? item.ranking_data.ranking_string.split(" ", 1) : null}</div>
                <div>{item.ranking_data ? item.ranking_data.ranking_string.split(" ").slice(1).map( word => word + " ") : null}</div>     
            </div>
            </> 
            : null}
        </div> 
        ))}
        </> 
        
    );
}
    
export default TABoxV2;