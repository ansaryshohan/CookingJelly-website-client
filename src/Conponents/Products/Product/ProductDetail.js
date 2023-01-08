import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Stars from '../../../Shared/Stars';
import CookingMethod from './CookingMethod';
import Review from '../Review/Review';
import SingleProductAllreview from '../Review/SingleProductAllreview';

const ProductDetail = () => {
  const { user } = useContext(AuthContext)
  const [reviewsFromDB, setReviewsFromDB] = useState([])
  const [instantReview,setInstantReview]=useState({})
  const { data } = useLoaderData();
  const { product_name, img, description, price, rating, ingredient, method, _id } = data;


  const handleReview = (reviewData) => {

    fetch('https://cooking-jelly-server.vercel.app/review', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('review added successfully')
        }
      })
      .catch(err => { console.log(err) })

      setInstantReview(reviewData)
  }

  useEffect(() => {
    fetch(`https://cooking-jelly-server.vercel.app/review/${_id}`)
      .then(res => res.json())
      .then(data => { setReviewsFromDB(data.data) })
  }, [_id])

  // console.log(reviewsFromDB)
  return (
    <div className='mt-10'>
      <div className='text-2xl font-semibold text-orange-300 mb-5'>
        <h1>Today we will learn to make {product_name}.<strong>you Can order from us any time</strong></h1>
      </div>
      <section className="p-4 lg:p-8 ">
        <div className="container mx-auto space-y-12">

          {/* product details description and photo is here */}
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row justify-around
          bg-gray-800 text-gray-100">
            <div>
              <img src={img} alt="" className="h-80 w-full" />
            </div>
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase text-gray-400">{product_name}</span>
              <h3 className="text-3xl font-bold">{product_name}</h3>
              <p className="my-6 text-gray-400">{description}</p>
              <Stars stars={rating} />
              <p className='text-lg text-orange-500 font-semibold mt-4'>price: ${price}</p>
            </div>
          </div>

          {/* product making method and ingredient section  is here */}
          <div className='container mx-auto space-y-12 grid grid-cols-1 md:grid-cols-2 pt-10 mt-5'>

            <div className='text-center'>
              <h1 className='mb-10 text-2xl text-[#579BB1] font-bold'>Ingredient</h1>
              {
                ingredient?.map((item, _idx) => {
                  return <div key={_idx} nn>
                    <h1>{item}</h1>
                    <div className="divider mx-auto w-4/6"></div>
                  </div>
                })
              }
            </div>

            <div className='mb-8'>
              <h1 className='text-center mb-10 text-2xl text-[#579BB1] font-bold'>Method</h1>
              {
                method?.map((steps, idx) => <CookingMethod
                  key={idx}
                  steps={steps}></CookingMethod>)
              }
            </div>
          </div>

          <div className='flex flex-col gap-10 items-center'>
            {/* review showing section */}
            {
              reviewsFromDB.length ?
                reviewsFromDB?.map(review => 
                  <div  key={review._id}>
                  <SingleProductAllreview
                  review={review}>
                  </SingleProductAllreview>

                  <SingleProductAllreview review={instantReview}/>
                  </div>)
                :
                Object.keys(instantReview).length?
                <SingleProductAllreview review={instantReview}/>:
                <h1 className='text-2xl font-semibold'>No review for this product</h1>
            }


            {/* review adding section is here */}
            {
              user ?
                <div className='w-full'>
                  <Review
                    handleReview={handleReview}
                    productId={_id}
                    product_name={product_name}
                    productImg={img}></Review>
                </div>
                :
                <div>
                  <p className='text-xl font-bold'>to add Your review Please <Link to="/login" className="link link-info">Login</Link> </p>
                </div>
            }
          </div>


        </div>
      </section>
    </div>
  );
};

export default ProductDetail;