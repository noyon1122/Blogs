import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleBookmarks}) => {
   const {title ,cover,author,author_img,reading_time,posted_date,hashtag}=blog;
    console.log(blog);
    return (
        <div className='mb-10'>
           
            <img className='w-full mb-4' src={cover} alt="" />
            <div className='flex justify-between mb-2'>
                <div className='flex'>
                    <img className='w-10 rounded-2xl' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h2 className='font-bold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                   <span>{reading_time} minutes read</span>
                   <button onClick={handleBookmarks} className='text-lg ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <p className='text-2xl' >{title}</p>
         <a href="#">{hashtag}</a>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;