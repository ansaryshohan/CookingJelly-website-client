import React from 'react';
import SingleProductCard from '../Home/ProductSection/SingleProductCard';

const CategoryProductCard = ({categoryProducts}) => {
const {title,product}= categoryProducts;

  return (
    <div className='w-9/12 mx-auto text-center pt-28 pb-20'>
       <div className='flex flex-col gap-2 mb-14'>
      <h1 className='text-4xl text-[#579BB1] font-bold '>{title}</h1>
      <div className="divider w-2/6 mx-auto"></div> 
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10' >
        {
          product?.map(singleProduct=><SingleProductCard
          key={singleProduct.product_id}
          singleProduct={singleProduct}></SingleProductCard>)
        }
      </div>
      
    </div>
  );
};

export default CategoryProductCard;