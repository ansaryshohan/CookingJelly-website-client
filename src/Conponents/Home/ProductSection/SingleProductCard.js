import React from 'react';
import Stars from '../../../Shared/Stars';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleProductCard = ({ singleProduct }) => {

  const { product_name, img, description, price, rating,product_id } = singleProduct

  return (
    <PhotoProvider>
    <div className="max-w-md rounded-md shadow-xl bg-[#F9F9F9]">
      <PhotoView src={img}>
      <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
      </PhotoView>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{product_name}</h2>
          <p className="dark:text-gray-100">{description.slice(0, 100)} ...</p>
          <div className='flex justify-between pt-4'>
            <h1 className='text-xl font-semibold text-[#579BB1]'>
              Price: $<span className='text-2xl text-orange-700 font-semibold'>{price}</span>
            </h1>
        {/* starts generating component is here */}
            <Stars stars={rating} title={rating} />
          </div>

        </div>
        <Link to={`/singleProduct/${product_id}`}>
        <button type="button" className="flex items-center justify-center w-full border px-5 py-2 text-xl font-medium rounded-xl bg-[#579BB1] text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] hover:border-[#579BB1] hover:font-semibold ease-in transition'">Read more</button>
        </Link>
      </div>
    </div>
    </PhotoProvider>
  );
};

export default SingleProductCard;