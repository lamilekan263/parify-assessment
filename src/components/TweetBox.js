import React, { useState } from 'react'
import { ImageIcon , GIFIcon, PollIcon, EmojiIcon, ScheduleIcon } from '../icons/Icon'




const TweetBox = () => {

    const [content, setContent] = useState('');


    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
           <textarea onChange={(e) => setContent(e.target.value)} value={content} className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="Whats's happening?" />
           <hr className="mb-3"></hr>
           <div className="flex items-center justify-between">
               <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="text-primary-base" />
                    </div>
               </div>
               <button onClick={() => alert("Your Tweet was sent successfully!")} className="bg-primary-base hover:bg-primary-dark transform transition-colors duration-200 shadow-lg text-blue-500 rounded-full px-4 py-2 font-medium">Tweet</button>
              
           </div>
        </div>
    )
}

export default TweetBox
