import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} 
                    blog={blog}
                    handleAddBookmarks={handleAddBookmarks}
                    handleReadingTime={handleReadingTime}></Blog>)
            }

            
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}

export default Blogs;