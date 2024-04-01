import React from 'react'
import "./maincontainer.css"

import { HiMagnifyingGlass } from "react-icons/hi2";

import { tabItems } from "../utils"
import Tab from './Tab';

const MainContainer = ({ isOpen, toggleSidebar }) => {

    const containerStyles = isOpen ? "width80" : "width100";

    return (
        <div className={`mainContainerMain ${containerStyles}`}>
            <div className='introBar'>
                <p className='introText'>
                    Hello Shahrukh &#128075;,
                </p>
                <div className='searchBar'>
                    <label htmlFor="search" className='magnifying' ><HiMagnifyingGlass size={"20px"} /></label>
                    <input type="text" name="search" id="search" placeholder='Search' />
                </div>
            </div>
            <div className='revenueTabs'>
                {tabItems.map((item, id) => {
                    return (
                        <Tab key={id} item={item} />
                    )
                })}
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MainContainer