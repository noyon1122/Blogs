import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handleBookmarks,handleReadingTime}) => {
    const [blogs ,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

  
    return (
        <div className="md:w-2/3 mt-3">
            <h2 className="text-4xl mb-2">Blogs</h2>

            {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookmarks:PropTypes.func,
    handleReadingTime:PropTypes.func
}
export default Blogs;