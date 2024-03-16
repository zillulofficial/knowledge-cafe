import PropTypes from 'prop-types'
const Blog = ({ blog }) => {
    console.log(blog)
    const { cover, author_img, author_name,
        release_date,reading_time,title,
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
                    <span>{reading_time} min read</span>
                </div>
            </div>
            {/* title */}
            <h3 className='text-4xl font-bold mb-4'>{title}</h3>
            {/* hashtags */}
            <p className='font-medium'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash} </a> </span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;