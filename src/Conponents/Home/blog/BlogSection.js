import React from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import { topTwoBlogData } from "../../../data/blogData";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogData = topTwoBlogData();
  return (
    <section className="pt-20">
      <SectionTitle title={"Blogs"} />
      <div className="w-10/12 mx-auto">
        <div className=" flex flex-col justify-end items-end">
          <Link to={"/blog"}>
        <h4 className="text-right text-orange-700 text-base font-medium mb-1  hover:text-secondaryColor">
          view all
        </h4>
        </Link>
        <div className="w-14 bg-emerald-200 mb-4 h-1"></div>
        </div>
        {/* ===blog cards=== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
