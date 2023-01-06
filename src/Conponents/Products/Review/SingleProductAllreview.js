import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import Stars from '../../../Shared/Stars';

const SingleProductAllreview = ({ review }) => {
  const { ratings, image, reviewText, userName, productName } = review;
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex items-center justify-center gap-6 space-x-4">
            <div>
          {
            image?<img src={image} alt='' className="object-cover w-12 h-12 rounded-full bg-gray-500"/>: <FaUser size={30}/>
          }
            </div>
            <div>
              <h4 className="font-bold">{userName? userName: "Unknown User"}</h4>
              <span className="text-xs dark:text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-orange-500">
            <Stars stars={ratings}/>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{reviewText}</p>
        </div>
      </div>
  );
};

export default SingleProductAllreview;