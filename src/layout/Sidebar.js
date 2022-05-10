import React, {useState} from 'react';
import {
    ExploreIcon,
    HomeIcon,
    MessagesIcon,
    MoreIcon,
    NotificationsIcon,
    ProfileIcon
} from "../icons/icon";
import twitterLogo from '../images/twitter.svg'
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";

const Sidebar = () => {
    const [active, setActive] = useState('Home');
    const sideLinks = [
        {
            name: "Home",
            icon: HomeIcon,
        },
        {
            name: "Explore",
            icon: ExploreIcon,
        },
        {
            name: "Notifications",
            icon: NotificationsIcon,
        },
        {
            name: "Messages",
            icon: MessagesIcon,
        },
        {
            name: "Profile",
            icon: ProfileIcon,
        },
        {
            name: "More",
            icon: MoreIcon,
        },
    ];

    const handleMenuItemClick = (name) => {
        setActive(name);
    }

    return (
        <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2">
            <div>
                <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest transition-colors duration-300 cursor-pointer">
                    <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9"/>
                </div>

                <nav className="mb-4">
                    <ul>
                        {
                            sideLinks.map(({name, icon}) => (
                                <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
                            ))
                        }
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transition-colors duration-300">Tweet</button>
            </div>
            <UserBox />
        </div>
    );
}

export default Sidebar;