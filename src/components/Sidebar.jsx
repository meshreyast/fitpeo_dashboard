import React from 'react'
import "./sidebar.css"

import MenuCard from './MenuCard';

import { PiNutBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { menuItems } from '../utils';

const Sidebar = ({ isOpen }) => {

    const sidebarClass = isOpen ? "sidebarMain" : "sidebarClose";

    return (
        <div className={sidebarClass}>
            <div className='firstGroup'>
                <div className='titleDiv'>
                    <PiNutBold size={"40px"} />
                    <p className='title'>Dashboard</p>
                </div>
                <div className='menuDiv'>
                    {menuItems.map((item, id) => {
                        return (
                            <MenuCard key={id} item={item} />
                        )
                    })}
                </div>
            </div>
            <div className='userCard'>
                <div className='picNtext'>
                    <CgProfile size={"30px"} />
                    <div className="userTexts">
                        <p className='name'>Evano</p>
                        <p className='designation'>Project Manager</p>
                    </div>
                </div>
                <IoIosArrowDown />
            </div>
        </div>
    )
}

export default Sidebar