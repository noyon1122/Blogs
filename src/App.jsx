import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
 
const [bookmarks,setBookmarks]=useState([]);
const handleBookmarks=blog=>{
   console.log("bookmark adding");
}
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto'>
     <Blogs handleBookmarks={handleBookmarks}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
