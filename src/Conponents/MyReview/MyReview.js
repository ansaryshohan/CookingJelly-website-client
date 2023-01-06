import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import HeadTitle from '../../Shared/HeadTitle';
import SingleReviewCard from './SingleReviewCard';

const MyReview = () => {
  const {user}=useContext(AuthContext)
const[myReviews,setMyReviews]=useState([])

  useEffect(()=>{
    fetch(`https://cooking-jelly-server.vercel.app/reviewByEmail/${user.email}`)
    .then(res=>res.json())
    .then(data=> setMyReviews(data.data))
  },[user])

  const handleReviewDelete = (id,productName) => {
    const agree = window.confirm(`Do you want to delete${productName}`);

    if (agree) {
      fetch(`https://cooking-jelly-server.vercel.app/deleteReview/${id}`, {
        method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=>{console.log(data.data)
      if(data.data.deletedCount>0){
        alert('The Review was deleted')
      }})
    }
    const remaining= myReviews.filter(reviews=>reviews._id !== id);
    console.log(remaining)
    setMyReviews(remaining)
  }
  

  return (
    <div  className='container mx-auto'>
      <HeadTitle title="myReviews"></HeadTitle>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
      {
        myReviews?.map(singleReview=><SingleReviewCard
        key={singleReview._id}
        singleReview={singleReview}
        handleReviewDelete={handleReviewDelete}></SingleReviewCard>)
      }
      </div>

    </div>
  );
};

export default MyReview;