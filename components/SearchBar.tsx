"use client";

import React from 'react';
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';

// import { SearchManufacturer } from "./"; Also works if the two files are in the same folder and we used index to export it

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");

    const handleSearch = () => {

    }

  return (
    <form className='searchbar' onClick={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
