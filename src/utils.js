import { RiFolderKeyholeFill } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineLiveHelp } from "react-icons/md";

import { IoIosArrowForward } from "react-icons/io"

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
