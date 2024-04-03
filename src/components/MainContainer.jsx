import React from 'react'
import "./maincontainer.css"

import { IoIosArrowDown } from "react-icons/io";

import { Chart, defaults } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

import { tabItems, BarChartData, DoughnutChartData } from "../utils"
import Tab from './Tab';
import SearchBar from './SearchBar';

import Win1 from "../Images/win1.jpg"
import Win2 from "../Images/win2.jpg"

defaults.maintainAspectRatio = true;
defaults.responsive = true;

const MainContainer = ({ isOpen, toggleSidebar }) => {

    const containerStyles = isOpen ? "width80" : "width100";

    return (
        <div className={`mainContainerMain ${containerStyles}`}>
            <div className="hideButton" onClick={toggleSidebar}>
                <IoIosArrowDown />
            </div>
            <div className='introBar'>
                <p className='introText'>
                    Hello Shahrukh &#128075;,
                </p>
                <SearchBar bgColor={"white"} />
            </div>
            <div className='revenueTabs'>
                {tabItems.map((item, id) => {
                    return (
                        <Tab key={id} item={item} />
                    )
                })}
            </div>
            <div className='chartsDiv'>
                <div className="overviewChartDiv">
                    <div className="overviewHeader">
                        <div className="overviewTexts">
                            <p className='textO'>Overview</p>
                            <p className='textM'>Monthly Earning</p>
                        </div>
                        <div className='dropdown'>
                            <p className='dropdowntext'>Quarterly</p>
                            <IoIosArrowDown color='gray' />
                        </div>
                    </div>
                    <div className="overviewChart">
                        <Bar
                            data={{
                                labels: BarChartData.map((data) => data.label),
                                datasets: [
                                    {
                                        label: "Quarterly Earnings",
                                        data: BarChartData.map((data) => data.value),
                                        borderRadius: 8,
                                        minBarLength: "100px",
                                        backgroundColor: [
                                            "#f2efff",
                                            "#f2efff",
                                            "#f2efff",
                                            "#f2efff",
                                            "#f2efff",
                                            "#f2efff",
                                            "#f2efff",
                                            "#5a32ea",
                                            "#f2efff",
                                            "#f2efff",
                                            "#f2efff",
                                            "#f2efff",
                                        ],
                                    }
                                ]
                            }}
                            options={{
                                scales: {
                                    y: {
                                        grid: {
                                            display: false
                                        },
                                        display: false
                                    },
                                    x: {
                                        grid: {
                                            display: false
                                        }
                                    }
                                },
                                plugins: {
                                    legend: {
                                        display: false,
                                    }
                                },
                            }}
                        />
                    </div>
                </div>
                <div className='customersChartDiv'>
                    <div className="customersTexts">
                        <p className='textO'>Customers</p>
                        <p className='textM'>Customers that by products</p>
                    </div>
                    <div className="customersChart">
                        <Doughnut
                            data={{
                                labels: DoughnutChartData.map((data) => data.label),
                                datasets: [
                                    {
                                        label: "Quarterly Earnings",
                                        data: DoughnutChartData.map((data) => data.value),
                                        backgroundColor: [
                                            "#f81d89",
                                            "#643ce9",
                                            "#f1effc"
                                        ],
                                    }
                                ]
                            }}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    }
                                },
                            }}
                        />
                        <div className='textOverlay'>
                            <p>65%</p>
                            <p>Total New Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tableDiv'>
                <div className="tableHeaderTexts">
                    <div className="tableHeaderTextTitle">Product Sell</div>
                    <div className="searchDrop">
                        <SearchBar bgColor={"#fafbff"} inputColor={"#fafbff"} />
                        <div className='dropdown'>
                            <p className='dropdowntext'>Quarterly</p>
                            <IoIosArrowDown color='gray' />
                        </div>
                    </div>
                </div>
                <table className='tableContainer'>
                    <tr className='tableheads'>
                        <th>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Total Sales</th>
                    </tr>
                    <tr>
                        <td className='tableFirstItems'>
                            <img className='tableImage' src={Win1} alt="Win1" />
                            <div>
                                <p className='productTitle'>Abstract 3D</p>
                                <p className='productDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </td>
                        <td className='tableData'>32 in stock</td>
                        <td className='tableData'>$ 45.99</td>
                        <td className='tableData'>20</td>
                    </tr>
                    <tr>
                        <td className='tableFirstItems'>
                            <img className='tableImage' src={Win2} alt="Win2" />
                            <div>
                                <p className='productTitle'>Sarphens Illustration</p>
                                <p className='productDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </td>
                        <td className='tableData'>32 in stock</td>
                        <td className='tableData'>$ 45.99</td>
                        <td className='tableData'>20</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MainContainer