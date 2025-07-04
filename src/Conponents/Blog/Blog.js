import React from 'react';
import HeadTitle from '../../Shared/HeadTitle';
import { Link } from 'react-router-dom';
import BlogCard from '../Home/blog/BlogCard';
import { allBlogData } from '../../data/blogData';

const Blog = () => {
 const blogData= allBlogData();
  return (
    <div>
      {/* Head title component is here */}
      <HeadTitle title='Blog' />

       <section className="pt-12">
            <div className="w-10/12 mx-auto">
              
              {/* ===blog cards=== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogData.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </section>
    </div>
  );
};

export default Blog;