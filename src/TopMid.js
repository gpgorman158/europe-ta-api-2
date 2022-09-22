import React, { useEffect, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom';

import Home from './Home.js'
import MiddleMenu from './MiddleMenu.js';
import SearchResults from './SearchResults';
import Country from './Country.js'
import Activity from './Activity.js'
import TABox from './TABox.js'


function TopMid( {url, searchValue} ) {

  return (
    <>
            
        { url  ? <MiddleMenu /> : searchValue.map( item => <TABox locationId={item.location_id}/>) }
            
    </>
  );
}

export default TopMid;