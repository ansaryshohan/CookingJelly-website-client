import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import SingleProductCard from "./SingleProductCard";

const ProductSection = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://cooking-jelly-server.vercel.app/topThree")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data));
  }, []);

  // console.log(products)
  return (
    <div className="w-11/12 mx-auto text-center pt-28 pb-8 md:pb-32">
      <SectionTitle
        title={"Our top Items"}
        description={"Enjoy an Exceptional Journey of Taste"}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 ">
        {products?.map((singleProduct) => (
          <SingleProductCard
            key={singleProduct._id}
            singleProduct={singleProduct}
          />
        ))}
      </div>

      {/* <div className="flex items-center justify-center w-full mt-16">
        <Link to='/products'>
          <button type="button" className="border px-10 py-4 text-2xl font-medium rounded-xl bg-[#579BB1] text-[#E1D7C6] hover:bg-[#E1D7C6] hover:text-[#579BB1] hover:border-[#579BB1] hover:font-semibold ease-in transition">See all Products</button>
        </Link>
      </div> */}
    </div>
  );
};

export default ProductSection;
