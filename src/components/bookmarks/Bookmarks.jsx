import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({bookmarks,time}) => {
  
    return (
        <div className="md:w-1/3 bg-gray-100 text-center rounded-md mt-3">

            <div className="bg-stone-50 text-center mt-4 p-4 rounded-lg font-bold">
                <span>Total Reading time :{time} </span>
            </div>
            <h3 className="text-xl mt-2">Bookmarked: {bookmarks.length}</h3>
          
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
   bookmarks:PropTypes.array,
   time:PropTypes.number
}
export default Bookmarks;