import { RiFolderKeyholeFill } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineLiveHelp } from "react-icons/md";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
import { CiWallet } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";

import { IoIosArrowForward } from "react-icons/io";

import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

export const menuItems = [
    {
        icon: <RiFolderKeyholeFill size={"20px"} />,
        text: "Dashboard",
    },
    {
        icon: <IoCubeOutline size={"20px"} />,
        text: "Product",
        arrow: <IoIosArrowForward />,
    },
    {
        icon: <IoPersonCircle size={"20px"} />,
        text: "Customers",
        arrow: <IoIosArrowForward />,
    },
    {
        icon: <IoWalletOutline size={"20px"} />,
        text: "Income",
        arrow: <IoIosArrowForward />,
    },
    {
        icon: <BiSolidOffer size={"20px"} />,
        text: "Promote",
        arrow: <IoIosArrowForward />,
    },
    {
        icon: <MdOutlineLiveHelp size={"20px"} />,
        text: "Help",
        arrow: <IoIosArrowForward />,
    },
]


export const tabItems = [
    {
        image: <AiOutlineDollarCircle size={"50px"} color="#01ab4d" />,
        title: "Earnings",
        amount: "$198K",
        arrow: <FaArrowUpLong />,
        arrowColor: "#01ab4d",
        pnl: "37.8%",
        time: "this month",
        bgColor: "#daffeb"
    },
    {
        image: <TiDocumentText size={"50px"} color="#a712fe" />,
        title: "Orders",
        amount: "$2.4K",
        arrow: <FaArrowDownLong />,
        arrowColor: "#d7000e",
        pnl: "2%",
        time: "this month",
        bgColor: "#e7dbff"
    },
    {
        image: <CiWallet size={"50px"} color="#0456be" />,
        title: "Balance",
        amount: "$2.4K",
        arrow: <FaArrowDownLong />,
        arrowColor: "#d7000e",
        pnl: "2%",
        time: "this month",
        bgColor: "#ccf2ff"
    },
    {
        image: <TbShoppingBag size={"50px"} color="#d7000e" />,
        title: "Total Sales",
        amount: "$89K",
        arrow: <FaArrowUpLong />,
        arrowColor: "#01ab4d",
        pnl: "11%",
        time: "this week",
        bgColor: "#feb0d8"
    },
]

export const BarChartData = [
    {
        "label": "Jan",
        "value": 35,
    },
    {
        "label": "Feb",
        "value": 25,
    },
    {
        "label": "Mar",
        "value": 45,
    },
    {
        "label": "Apr",
        "value": 35,
    },
    {
        "label": "May",
        "value": 40,
    },
    {
        "label": "Jun",
        "value": 20,
    },
    {
        "label": "Jul",
        "value": 40,
    },
    {
        "label": "Aug",
        "value": 50,
    },
    {
        "label": "Sep",
        "value": 45,
    },
    {
        "label": "Oct",
        "value": 40,
    },
    {
        "label": "Nov",
        "value": 35,
    },
    {
        "label": "Dec",
        "value": 35,
    },
]

export const DoughnutChartData = [
    {
        "label": "20%",
        "value": 200,
    },
    {
        "label": "45%",
        "value": 450,
    },
    {
        "label": "35%",
        "value": 350,
    },
]