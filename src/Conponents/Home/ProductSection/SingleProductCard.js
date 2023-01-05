import React from 'react';

const SingleProductCard = ({ singleProduct }) => {

  const { product_name, img, description, price, rating } = singleProduct

  return (
    <div className="max-w-md rounded-md shadow-xl dark:bg-gray-900 dark:text-gray-100">
      <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{product_name}</h2>
          <p className="dark:text-gray-100">{description.slice(0,100)} ...</p>
        </div>
        <button type="button" className="flex items-center justify-center w-full border px-5 py-2 text-xl font-medium rounded-xl bg-[#579BB1] text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] hover:border-[#579BB1] hover:font-semibold ease-in transition'">Read more</button>
      </div>
    </div>
  );
};

export default SingleProductCard;