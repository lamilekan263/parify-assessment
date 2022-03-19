import React, {  useState } from 'react';
import { Divider } from '../components/Divider';
import FeedList from '../components/FeedList';
import TweetBox from '../components/TweetBox';

import { PopularIcon } from '../icons/Icon';

const Content = () => {
    const [tweets] = useState([
  {
    "id": 1,
    "avatar": "https://pbs.twimg.com/profile_images/1481640584334872576/GT6ohZB5_400x400.jpg",
    "displayName": "Phaheedat",
    "userName": "@Deft_girl",
    "timestamp": "1h",
    "content": "Sometimes we don’t practice what we preach  I hate this type of situation 😬😑 "
  },
  {
    "id": 2,
    "avatar": "https://downloadillustrations.com/wp-content/uploads/2020/12/CleanShot-2020-12-06-at-06.57.14.png",
    "displayName": "Olive",
    "userName": "@olivemia",
    "timestamp": "4h",
    "content": "This is a React-based e-commerce shopping project. MockAPI is used to get card information, and goods may be added to or deleted from the shopping cart or favorites area. User authentication is handled by Firebase, payment is handled by Stripe, and form validation is handled by Formik and yup.",
    "image": "https://camo.githubusercontent.com/1c7b4d5c1792f7bd26b85e19dcc5a692f65ab153c2789240fdfab010b26070ef/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3836323933313834313738313333343034362f3837363534333830333031343634333732322f53637265656e73686f745f323032312d30382d31355f61745f32322d31302d32375f4d6f72655f486f6d652e706e673f77696474683d31323930266865696768743d353733"
  },

  {
    "id": 3,
    "avatar": "https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg",
    "displayName": "Hira",
    "userName": "@hira",
    "timestamp": "5h",
    "content": "Getir the clone was done exactly. Technologies I use are React and Tailwind. Also used npm packages as an extra helper.",
    "image": "https://camo.githubusercontent.com/444d5787a9c480459e9287a48cc1e7ed3ec82ce3d341f2a3fd069c3b37f911e4/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3830313930393038333232303437353931342f3930353537373034353737363536343236352f436170747572652e504e47"
  },
  {
    "id": 4,
      "avatar": "https://pbs.twimg.com/profile_images/1503389458305011721/nnzqN-Zp_400x400.jpg",
      "displayName": "Ye’",
    "userName": "@yewandefactor",
    "timestamp": "5h",
      "content": "People that are sincere with their emotions, completely vulnerable and living will always have my respect. It is not an easy thing to do or maybe it is the easiest and the default way we all ought to do but experience beats it out of us.",
  }
]
);
    

    return (
        <main className="flex-1 flex-col border-r border-l border-gray-extraLight">
            <header className="flex sticky top-0 z-10 justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold content-xl text-gray-900">Home</span>
                <PopularIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className="flex space-x-4 px-4 py-3">
            <img className="w-11 h-11 rounded-full" src="https://pbs.twimg.com/profile_images/1259511509710970882/rOPamg3j_400x400.jpg" alt="Profile"/>
            <TweetBox />
            </div>
            <Divider />
            <FeedList tweets={tweets} />
        </main>
    )
}

export default Content
