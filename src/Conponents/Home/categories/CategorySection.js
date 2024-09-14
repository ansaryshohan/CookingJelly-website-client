import React from 'react'
import SectionTitle from '../../../Shared/SectionTitle';
import { categoryData } from '../../../data/categoryData';
import CategorySingle from './CategorySingle';

const CategorySection = () => {
  return (
    <section className='w-full '>
     <div className='w-full md:w-10/12 mx-auto py-10 '>
     <SectionTitle title={"Our top Category"} />
     <div className='grid grid-cols-3 md:grid-cols-6 gap-5'>

      {
        categoryData.map(category=><CategorySingle key={category.id} category= {category}/>)
      }
     </div>

     </div>
    </section>
  )
}

export default CategorySection