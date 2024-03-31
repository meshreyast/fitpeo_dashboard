import React from 'react'
import "./menucard.css"

const MenuCard = ({ item }) => {

    return (
        <div className='menuCardDiv'>
            <div className='iconNtext'>
                {item.icon}
                <p>{item.text}</p>
            </div>
            {item.arrow}
        </div>
    )
}

export default MenuCard