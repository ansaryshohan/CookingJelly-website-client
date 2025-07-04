import React, { useEffect, useState } from "react";
import HeadTitle from "../../../Shared/HeadTitle";
import CategoryProductCard from "./CategoryProductCard";
import LoadingComp from "../../loadingComp/LoadingComp";

const AllProducts = () => {
  const [loading,setLoading]= useState(false);
  const [productData,setProductData]= useState([]);
  useEffect(()=>{
    setLoading(true);
   const loadData=async()=>{
      const res= await fetch('https://cooking-jelly-server.vercel.app/allProducts');
      const data = await res.json();
      console.log(data.data);
      setProductData(data.data);
      setLoading(false)
   }
   loadData();
  },[])

  if(loading)return <LoadingComp/>

  return (
    <div className="bg-secondaryBgColor">
      <HeadTitle title="Products" />
      {productData?.map((categoryProducts) => (
        <CategoryProductCard
          key={categoryProducts._id}
          categoryProducts={categoryProducts}
        />
      ))}
    </div>
  );
};

export default AllProducts;
