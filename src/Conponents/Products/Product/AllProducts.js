import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeadTitle from '../../../Shared/HeadTitle';
import CategoryProductCard from './CategoryProductCard';

const AllProducts = () => {
  const { data } = useLoaderData()

  return (
    <div className='bg-[#E1D7C6]'>
      <HeadTitle title="Products"/>
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