import React from 'react'
import "./maincontainer.css"

const MainContainer = ({ isOpen, toggleSidebar }) => {

    const containerStyles = isOpen ? "width80" : "width100";

    return (
        <div className={`mainContainerMain ${containerStyles}`}>
        </div>
    )
}

export default MainContainer