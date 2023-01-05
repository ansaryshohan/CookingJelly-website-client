import React from 'react';
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Stars = ({ stars }) => {

  const arrayOfFive = [...Array(5).keys()];
  return (
    <div className='flex gap-1 text-orange-600 text-lg'>
      {
        arrayOfFive.map(value => {
          let number = value + .5;
          return <span key={value}>
            {
              stars >= value + 1 ? <BsStarFill /> :
                stars >= number ? <BsStarHalf /> : <BsStar />
            }
          </span>
        })
      }
    </div>
  );
};

export default Stars;