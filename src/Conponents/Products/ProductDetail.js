import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Stars from '../../Shared/Stars';
import CookingMethod from './CookingMethod';

const ProductDetail = () => {
  const { data } = useLoaderData();
  const { product_name, img, description, price, rating, ingredient, method, product_id } = data;
  return (
    <div className='mt-10'>
      <div className='text-2xl font-semibold text-orange-300 mb-5'>
        <h1>Today we will learn to make {product_name}.<strong>you Can order from us any time</strong></h1>
      </div>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row justify-around">
            <div>
              <img src={img} alt="" className="h-80 w-full" />
            </div>
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">{product_name}</span>
              <h3 className="text-3xl font-bold">{product_name}</h3>
              <p className="my-6 dark:text-gray-400">{description}</p>
              <p><Stars stars={rating} /></p>
              <p className='text-lg text-orange-500 font-semibold mt-4'>price: ${price}</p>
            </div>
          </div>
          <div className='container mx-auto space-y-12 grid grid-cols-1 md:grid-cols-2'>

            <div className='text-center'>
              <h1 className='mb-10 text-2xl text'>Ingredient</h1>
              {
                ingredient?.map((item,_idx)=>{ return <div key={_idx}nn>
                <h1>{item}</h1>
                <div className="divider mx-auto w-4/6"></div> 
                </div>})
              }
            </div>

            <div className='mb-8'>
              <h1 className='text-center mb-8'>Method</h1>
              {
                method?.map((steps, idx) => <CookingMethod
                  key={idx}
                  steps={steps}></CookingMethod>)
              }
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductDetail;