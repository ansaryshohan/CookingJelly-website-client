import React from "react";
import { useLoaderData } from "react-router-dom";
import HeadTitle from "../../../Shared/HeadTitle";
import CategoryProductCard from "./CategoryProductCard";

const AllProducts = () => {
  const { data } = useLoaderData();

  return (
    <div className="bg-secondaryBgColor">
      <HeadTitle title="Products" />
      {data?.map((categoryProducts) => (
        <CategoryProductCard
          key={categoryProducts._id}
          categoryProducts={categoryProducts}
        />
      ))}
    </div>
  );
};

export default AllProducts;
