import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className='bg-purple-200 rounded-xl text-purple-900 py-4 mb-4'>
                <h3 className='text-2xl text-center'>Spent time on read: {readingTime} min</h3>
            </div>
            <div className=' bg-slate-300 rounded-xl py-4'>
                <h3 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;