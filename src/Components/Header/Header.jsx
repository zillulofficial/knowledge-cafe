import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className=' flex justify-between items-center pt-4 pb-4 mb-6 border-b-2'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;