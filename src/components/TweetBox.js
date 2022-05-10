import React, {useState} from 'react';
import {EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon} from "../icons/icon";
import {db} from "../firebase";
import {setDoc, doc, serverTimestamp} from "firebase/firestore";
import AddImage from './AddImage';

const TweetBox = ({ getTweets, setTweets }) => {
    const [content, setContent] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [showModal, setShowModal] = useState(false);

    console.log(imgUrl);
    const sendTweet = async () => {
        if (content !== ''){
            await setDoc(doc(db, "feeds", Math.floor(Math.random() * 9999999999).toString()), {
                displayName: "Emre Kahriman",
                username: "@emrekhrmn_",
                content,
                timestamp: serverTimestamp(),
                image: imgUrl,
                avatar: "https://pbs.twimg.com/profile_images/1296845445503897601/H9uXNcUr_400x400.jpg"
            }).then(() => { setContent(''); setImgUrl('')});
            getTweets().then(res => setTweets(res));
        }

    }
    return (
        <div className="flex flex-col flex-1 mt-3 px-2">
            <textarea
                className="w-full min-h-16 text-2xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
                placeholder="What's Happening"
                onChange={e => setContent(e.target.value)}
                value={content}
            ></textarea>
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div onClick={() => setShowModal(true)} className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition-colors duration-300 hover:cursor-pointer">
                        <ImageIcon className={`w-6 h-6   ${imgUrl.length > 15 ? 'text-primary-dark font-bold animate-pulse ' : 'text-primary-base'}`}/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition-colors duration-300 hover:cursor-pointer">
                        <GIFIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition-colors duration-300 hover:cursor-pointer">
                        <PollIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition-colors duration-300 hover:cursor-pointer">
                        <EmojiIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest transition-colors duration-300 hover:cursor-pointer">
                        <ScheduleIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                </div>
                <button
                    className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}>
                    Tweet
                </button>
            </div>
            <AddImage showModal={showModal} setShowModal={setShowModal} imgUrl={imgUrl} setImgUrl={setImgUrl} />
        </div>
    );
}

export default TweetBox;