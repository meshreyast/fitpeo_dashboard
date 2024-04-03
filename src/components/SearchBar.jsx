import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";


const SearchBar = ({ bgColor, inputColor }) => {
    return (
        <div className='searchBar' style={{ backgroundColor: bgColor }}>
            <label htmlFor="search" className='magnifying' ><HiMagnifyingGlass size={"20px"} /></label>
            <input type="text" name="search" id="search" placeholder='Search' style={{ inputColor }} />
        </div>
    )
}

export default SearchBar