import PropTypes from 'prop-types'
import { BsBookmarks } from "react-icons/bs";
const Blog = ({ blog, handleAddBookmarks, handleReadingTime }) => {
    // console.log(blog)
    const {id, cover, author_img, author_name,
        release_date, reading_time, title,
        hashtags } = blog
    return (
        <div className='mb-20'>
            <img className='mb-9 rounded-xl' src={cover} alt="" />
            {/* author info */}
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-6'>
                    <img className='w-12  rounded-xl' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author_name}</h2>
                        <p className='font-semibold'>{release_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddBookmarks(blog)} className='text-red-500'><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            {/* title */}
            <h3 className='text-4xl font-bold mb-4'>{title}</h3>
            {/* hashtags */}
            <p className='font-medium mb-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash} </a> </span>)
                }
            </p>
            <button className='text-purple-800 underline' onClick={()=> handleReadingTime(id, reading_time)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}
export default Blog;