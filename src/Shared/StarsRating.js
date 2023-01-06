import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarsRating = ({setStarRating}) => {

  const [rating, setRatings] = useState(null);
  const [hover, setHover]= useState(null);
  return (
    <div className='flex gap-2 text-xl'>
      {
        [...Array(5)].map((star, i) => {

          const ratingValue = i + 1;
          return <label key={i}>
            <input
              type="radio"
              name="rating"
              className='hidden'
              id=""
              value={ratingValue}
              // onClick={()=>setRatings(ratingValue)}
            />
            <FaStar
            size={50}
            className={ratingValue<= (rating|| hover)? "text-orange-600": 'text-gray-400'}
            onMouseEnter={()=> setHover(ratingValue)}
            onMouseLeave={()=> setHover(null)}
            onClick={()=>{setStarRating(ratingValue); setRatings(ratingValue)}} 
            />
          </label>
        })
      }
    </div>
  );
};

export default StarsRating;