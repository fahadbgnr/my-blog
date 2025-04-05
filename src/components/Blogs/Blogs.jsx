import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
const [blogs, setBlogs]=useState([])
    useEffect(()=> {
        fetch("Blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    console.log(blogs);
    return (
        <div>
            <h1 className='text-3xl'>total : {blogs.length}</h1>
            <div className="all-blogs grid grid-cols-2 gap-5 m-5">
                {
                    blogs.map((blog)=><Blog blog={blog}></Blog>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;