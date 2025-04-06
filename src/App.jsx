 
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked, setBookmarked]= useState([]);
  const [readingCount, setReadingCount]= useState(0);

const handleBookMark = (blog)=>{
  setBookmarked([...bookmarked, blog])
   

  }
const handleMarkAsRead =(time,id)=>{
   const  newTime = readingCount + time; 
setReadingCount(newTime);

handleRemoveFromBookmark(id)
}
 
const handleRemoveFromBookmark=(id)=>{
  const remainingBookmark = bookmarked.filter((mark)=> mark.id!==id)
  setBookmarked(remainingBookmark);

}

  return (
    <>
    <Navbar></Navbar>
    


    <div className="main-container flex text-center">
      <div className="left-container w-[70%]">
        
        <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>

      </div>
      <div className="right-container w-[30%]">
        <h1>Reading time : {readingCount}</h1>
        <h1>Bookmark count : {bookmarked.length}</h1>

        {
          bookmarked.map((marked)=> <p key={marked.id} className='bg-sky-300 p-2 m-3 shadow rounded-xl'>{marked.title}</p>)
        }

      </div>
    </div>

    

    </>
  )
}

export default App
