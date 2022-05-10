import React from 'react';
import {MoreWithoutCircleIcon} from "../icons/icon";

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transition-colors duration-200">
            <img src="https://pbs.twimg.com/profile_images/1296845445503897601/H9uXNcUr_400x400.jpg"
                 alt="Profile"
                 className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col">
                <span className="font-bold text-base text-black">Emre Kahrima..</span>
                <span className="text-sm text-gray-dark">@emrekhrmn_</span>
            </div>
            <MoreWithoutCircleIcon />
        </div>
    );
}

export default UserBox;