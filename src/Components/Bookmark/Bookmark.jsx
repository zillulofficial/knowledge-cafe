import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title}= bookmark
    return (
        <div className="bg-white rounded-lg mt-4 mx-4">
            <h3 className='text-lg p-5'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.array
}
export default Bookmark;