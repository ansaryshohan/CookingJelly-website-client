import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProductCard from './SingleProductCard';

const ProductSection = () => {

  const [products, setProducts] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/topThree')
      .then(res => res.json())
      .then(data => setProducts(data?.data))
  }, [])

  // console.log(products)
  return (
    <div className='w-9/12 mx-auto text-center pt-28 pb-20'>
      
      <div className='flex flex-col gap-2 mb-14'>
      <h1 className='text-xl text-[#579BB1] font-bold '>Our top Items</h1>
      <div className="divider w-2/6 mx-auto"></div> 
      <p className='text-2xl font-semibold '>Enjoy an Exceptional Journey of Taste</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10' >
        {
          products?.map(singleProduct => <SingleProductCard
            key={singleProduct._id}
            singleProduct={singleProduct}
          >
          </SingleProductCard>)
        }
      </div>

      <div className="flex items-center justify-center w-full mt-16">
        <Link to='/products'>
        <button type="button" className="border px-10 py-4 text-2xl font-medium rounded-xl bg-[#579BB1] text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] hover:border-[#579BB1] hover:font-semibold ease-in transition">See all Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;