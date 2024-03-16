import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        
        <main className='flex justify-between'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </main>
      </div>
    </>
  )
}

export default App
