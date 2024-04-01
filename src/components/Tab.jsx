import React from 'react'

const Tab = ({ item }) => {
    return (
        <div className='tab'>
            <div className='iconBG' style={{ backgroundColor: item.bgColor }}>
                {item.image}
            </div>
            <div className='tabTexts'>
                <p className='tabItemTitle'>{item.title}</p>
                <p className='tabItemAmount'>{item.amount}</p>
                <p className='tabItemStats'>
                    <span style={{ color: item.arrowColor }}>{item.arrow}</span>
                    <span style={{ color: item.arrowColor, fontWeight: 600 }}>{item.pnl}</span> {item.time}
                </p>
            </div>
        </div>
    )
}

export default Tab