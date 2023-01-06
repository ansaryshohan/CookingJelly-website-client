import React from 'react';
import { Link } from 'react-router-dom';

const SingleReviewCard = ({ singleReview, handleReviewDelete }) => {

  const { productImg, productName, ratings, reviewText, _id } = singleReview;

  return (
    <div>

      <div className="w-full p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mb-8">
        <div className="grid grid-cols-2">
          <div className="space-y-2 flex items-center justify-center">
            <img src={productImg} alt="" className="block object-cover object-center w-3/4 rounded-md" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
            <h3 className="text-xl font-semibold dark:text-violet-400">{productName}</h3>
            <p className="leading-snug dark:text-gray-400">{reviewText}</p>

            <div className='pt-10 flex gap-5'>

              <Link to={`/reviewUpdate/${_id}`}>
                <button className="btn btn-outline  font-bold text-[#579BB1] border-[#579] hover:bg-[#579]">   Update Review</button>
              </Link>

              <button
                className="btn btn-success  font-bold bg-red-600 text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] border-red-100 hover:border-[#579]"
                onClick={() => handleReviewDelete(_id,productName)}
              >Delete Review </button>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleReviewCard;