import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from './CategoryProductCard';

const AllProducts = () => {
  const { data } = useLoaderData()

  return (
    <div className='bg-[#E1D7C6]'>
      {
        data?.map(categoryProducts => <CategoryProductCard
          key={categoryProducts._id}
          categoryProducts={categoryProducts}
        ></CategoryProductCard>)
      }
    </div>
  );
};

export default AllProducts;