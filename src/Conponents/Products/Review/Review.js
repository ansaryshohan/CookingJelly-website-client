import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import StarsRating from '../../../Shared/StarsRating';

const Review = ({ handleReview, productId, product_name,productImg }) => {

  const { user } = useContext(AuthContext)
  const [starRating, setStarRating] = useState(0)
  const [review, setReview] = useState('')

  const reviewData = {
    'ratings': starRating,
    'image': user.photoURL,
    'reviewText': review,
    'email': user.email,
    'userName': user.displayName,
    'productId': productId,
    "productName": product_name,
    "productImg":productImg,
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    form.reset()
    setStarRating(0)
  }

  // console.log(reviewData)

  // console.log(review);
  return (
    <div>
      <div className="flex flex-col max-w-full p-8 shadow-sm rounded-xl lg:p-12 border-[#579] border">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
          <div className="flex flex-col items-center mt-2">
            <span className="text-center text-orange-500">Rate this recipe!</span>
          </div>
        </div>

        {/* review taking form is here */}
        <form className='py-3' onSubmit={handleOnSubmit} >
          {/* star taking value is here */}
          <div className='flex justify-center'>
            <StarsRating setStarRating={setStarRating}></StarsRating>
          </div>
          {/* review message area */}
          <div className="flex flex-col w-full my-4">
            <textarea
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none textarea-info textarea w-3/4 mx-auto"
              onChange={(event) => setReview(event.target.value)} >
            </textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="py-4 px-8 my-3 font-semibold rounded-md bg-[#579] text-[#E1D7C6] hover:bg-[#579BB6]"
              onClick={() => handleReview(reviewData)}>
              Leave feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;