import React from 'react';
import {SearchIcon} from "../icons/icon";
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
    return (
        <aside className="w-80">
            <div className="flex items-center space-x-4 m-3 p-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white border-2 border-transparent focus-within:border-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-5 h-5"/>
                <input type="text"
                       placeholder="Search Twitter"
                       className="placeholder:text-gray-dark bg-transparent focus:outline-none w-full text-sm"
                />
            </div>
            <div className="mt-5">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'reactjs'
                    }}
                    options={{
                        height: '730',
                    }}
                />
            </div>
        </aside>
    );
}

export default Widgets;