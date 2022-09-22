import React from 'react'
import { useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"
import TABox from './TABox.js';


function SearchResults( {searchValue, filterValue} ) {
    
  let { results } = useParams();

  return (
    <>
        {searchValue !== null 
          ? searchValue.data.map( item => <TABox key={item.location_id} locationId={item.location_id}/>) 
          : filterValue !== null 
            ? filterValue.data.map( item => <TABox key={item.location_id} locationId={item.location_id}/>) 
            : null}
    </>
  );
}

export default SearchResults;