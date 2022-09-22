import React from 'react'
// import LeftMenu from './LeftMenu.js'
import MiddleMenu from './MiddleMenu.js'
import LeftMenu from './LeftMenu.js';
import TopMid from './TopMid.js';


function Home( {url, onCountryClick, searchValue} ) {


  return (
    
    <div className="home">
        <LeftMenu onCountryClick={onCountryClick}/>
        <TopMid searchValue={searchValue} url={url}/>
    </div>
      
  );
}

export default Home;