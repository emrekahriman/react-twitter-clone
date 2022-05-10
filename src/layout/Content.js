import React, {useEffect, useState} from 'react';
import {PopulerIcon} from "../icons/icon";
import TweetBox from "../components/TweetBox";
import {query, collection, getDocs, orderBy} from "firebase/firestore";
import {db} from "../firebase";
import FeedList from "../components/FeedList";


const Content = () => {
    const [tweets, setTweets] = useState([]);

    const getTweets = async () => {
        const q = query(collection(db, "feeds"), orderBy('timestamp', 'desc'));

        const querySnapshot = await getDocs(q);
        let tweetsTemp = []
        querySnapshot.forEach((doc) => {
            tweetsTemp.push(doc._document.data.value.mapValue.fields)
        });
        return tweetsTemp;
    }

    useEffect(() => {
        getTweets().then(res => setTweets(res));
    }, [])

    return (
        <main className="flex-1 flex flex-col border-l border-r border-gray-extralight">
            <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extralight bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <PopulerIcon className="w-6 h6 text-primary-base"/>
            </header>

            <div className="flex space-x-4 px-4 py-3">
                <img src="https://pbs.twimg.com/profile_images/1296845445503897601/H9uXNcUr_400x400.jpg"
                     alt="Profile"
                     className="w-14 h-14 rounded-full"
                />
                <TweetBox getTweets={getTweets} setTweets={setTweets} />
            </div>

            {/* Divider */}
            <div className="h-3 bg-gray-lightest border-t border-b border-gray-extralight" />

            {/* Feed */}
            <FeedList tweets={tweets} />
        </main>
    );
}

export default Content;