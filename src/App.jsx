import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
 
const [bookmarks,setBookmarks]=useState([]);
//Declare useState for reading time
const [readingtime,setTime]=useState(0);
const handleBookmarks=blog=>{
   const newBookMarks=[...bookmarks,blog]
   setBookmarks(newBookMarks);
   
}
//handle Reading time 
const handleReadingTime =(time,id) =>{
  const newTime=readingtime+time;
  setTime(newTime);
  //console.log("mark as read button clicked",newTime)

  //remove mark as read time

  const reamingBookmarks=bookmarks.filter(bookmark => bookmark.id!==id)
  setBookmarks(reamingBookmarks);
}
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto gap-4'>
     <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
     <Bookmarks time={readingtime} bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
