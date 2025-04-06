import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookMark,handleMarkAsRead}) => {
  
  // console.log(handleBookMark);
// const {blog} = props;
// console.log (blog); 


    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="" />
  </figure>
  <div className="card-body">
    <div className="authors flex items-center justify-around">
        <h1>{blog.author}</h1>
        <img className='w-16' src={blog.author_img} alt="" />
        <button onClick={()=>handleBookMark(blog)}><FaBookmark size={25}/></button>
    </div>
    <h2 className="card-title">{blog.title}</h2>
    
    <div className="flex">
    {
        blog.hashtags.map((has)=><p>{has}</p> )
    }
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=> handleMarkAsRead(blog.reading_time, blog.id)} className="btn btn-primary">Marks as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;