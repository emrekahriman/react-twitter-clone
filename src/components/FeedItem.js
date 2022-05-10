import React from 'react';
import {LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon} from "../icons/icon";

const FeedItem = ({ avatar, content, displayName, image, timestamp, username }) => {
    return (
        <article className="flex space-x-3 border-b border-gray-extralight px-4 py-3 cursor-pointer">
            <img
                src={avatar.stringValue}
                alt="Profile"
                className="w-14 h-14 rounded-full"
            />
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{displayName.stringValue}</h4>
                    <span className="ml-2 text-gray-dark">{username.stringValue}</span>
                    <div className="mx-2 bg-gray-dark h-0.5 w-0.5 rounded-full" />
                    <span className="text-gray-dark">
                    {timestamp.timestampValue.split('T')[0]}
                </span>
                </div>
                <p className="mt-2 text-gray-900 text-sm">{content.stringValue}</p>
                {image && (
                    <img className="my-2 rounded-2xl max-h-96" src={image.stringValue} alt="tweet-img"/>
                )}
                <ul className="-ml-2 mt-3 flex justify-between max-w-lg">
                    <li className="flex items-center space-x-1 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light transition-colors duration-300">
                            <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                        </div>
                        <span className="group-hover:text-primary-base">{Math.floor(Math.random() * 20)}</span>
                    </li>

                    <li className="flex items-center space-x-1 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-50 transition-colors duration-300">
                            <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
                        </div>
                        <span className="group-hover:text-green-400">{Math.floor(Math.random() * 10)}</span>
                    </li>

                    <li className="flex items-center space-x-1 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-50 transition-colors duration-300">
                            <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
                        </div>
                        <span className="group-hover:text-pink-400">{Math.floor(Math.random() * 3333)}</span>
                    </li>


                    <li className="flex items-center space-x-1 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light transition-colors duration-300">
                            <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default FeedItem;