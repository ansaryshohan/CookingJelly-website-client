import React from 'react'
import { Link } from 'react-router-dom';

const CategorySingle = ({category}) => {
  return (
    <div className='mb-5 grid place-content-center'>
     <Link to={"/products"}>
     <img src={category.image} alt="" className='w-20 h-20 sm:w-28 sm:h-28 rounded-full mb-2 object-cover object-center'/>
     <h3 className='font-medium text-base sm:text-xl text-primaryColor text-center'>{category.title}</h3>
     </Link>
    </div>
  )
}

export default CategorySingle