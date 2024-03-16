import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks]= useState([])
  const [readingTime, setReadingTime]= useState(0)

  const handleAddBookmarks= (blog)=>{
    const newBookmark= [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleReadingTime= (id, time)=>{
    setReadingTime(readingTime + time)

    // remove addedBookmark
    const remainingBookmark= bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)
  }
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>

        <main className='flex justify-between gap-6'>
          <Blogs
          handleAddBookmarks={handleAddBookmarks}
          handleReadingTime={handleReadingTime}></Blogs>
          <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}></Bookmarks>
        </main>
      </div>
    </>
  )
}

export default App
