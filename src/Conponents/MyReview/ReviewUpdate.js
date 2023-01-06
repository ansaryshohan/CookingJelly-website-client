import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Stars from '../../Shared/Stars';
import StarsRating from '../../Shared/StarsRating';

const ReviewUpdate = () => {
  const [updatedText,setUpdatedText]=useState("")
  const[starRatingsNew,setStarRatingsNew]=useState(0)
  const {data}=useLoaderData()
  // console.log(data)

  const {reviewText, productName,ratings, _id}= data[0];

  const handleOnSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
 
    const updatedData={
      reviewText: updatedText ,
      ratings:starRatingsNew, }

    fetch(`https://cooking-jelly-server.vercel.app/reviewUpdate/${_id}`,{
      method:'PUT',
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(updatedData),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.data.modifiedCount>0){
        alert('review updated successfully')
        // form.reset()
      }
      // console.log(data)
    })

  }

  return (
    <div>
       <div className="flex flex-col max-w-full p-8 shadow-sm rounded-xl lg:p-12">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center text-[#579]">Updating review of: {productName}</h2>
          <div className="flex flex-col items-center mt-2 text-[#579]">
            <span className="text-center ">You rated the product</span>
            <Stars stars={ratings}/>
          </div>
        </div>

        {/* review taking form is here */}
        <form className='py-3' onSubmit={handleOnSubmit} >
          {/* star taking value is here */}
          <div className='flex justify-center items-center gap-5 text-orange-500'>
          <div className="flex flex-col items-center mt-2">
            <span className="text-center text-[#579]  text-2xl font-semibold">Change the ratings:</span>
          </div>
            <StarsRating setStarRating={setStarRatingsNew}></StarsRating>
          </div>
          {/* review message area */}
          <div className="flex flex-col w-full my-4">
            <textarea
              rows="3"
              placeholder={reviewText}
              className="p-4 rounded-md resize-none textarea-info textarea w-3/4 mx-auto"
              onChange={(e)=>setUpdatedText(e.target.value)}
             >
            </textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="py-4 px-8 my-3 font-semibold rounded-md bg-[#579] text-[#E1D7C6] hover:bg-[#579BB6]"
              >
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewUpdate;