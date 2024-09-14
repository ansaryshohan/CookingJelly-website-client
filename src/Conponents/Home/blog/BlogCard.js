import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className='bg-white rounded-xl shadow-xl pb-6'>
      <div className='p-3 mb-4'>
      <img src={blog.image} alt={blog.title} className='w-full h-64 rounded-xl object-cover object-center' />
      </div>
      <h3 className='text-3xl font-semibold text-primaryColor px-3 mb-2'>{blog.title}</h3>
      <p className='text-base font-normal text-gray-600 px-3'>{blog.description.slice(0,40)}</p>
    </div>
  )
}

export default BlogCard