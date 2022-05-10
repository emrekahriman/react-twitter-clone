import React, { useState } from "react";

export default function Modal({showModal, setShowModal, imgUrl, setImgUrl}) {
    const [imgUrlErr, setImgUrlErr] = useState(false);

    const addImageUrl  = () => {
        if (imgUrl.length > 15 && imgUrl.startsWith('http')) {
            setImgUrl(imgUrl);
            setShowModal(false);
            setImgUrlErr(false);
        }else{
            setImgUrlErr(true);
            setImgUrl('');
        }
    }
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-96 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add Image Url
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-gray-light float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => { setShowModal(false); setImgUrl('');}}
                                    >
                                        <span className="bg-transparent  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <input value={imgUrl} onChange={e => setImgUrl(e.target.value)} minLength="10"  className="h-10 w-full px-2 border-b outline-none focus:border focus:border-primary-base ease-out duration-300" placeholder="Please enter image url"/>
                                    {imgUrlErr && (
                                        <span className="ml-2 text-red-800 animate-pulse">Please type an image url</span>
                                    )}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-gray-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => { setShowModal(false); setImgUrl(''); }}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-primary-base text-white hover:bg-primary-dark font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => { addImageUrl()}}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
