import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item, index) => (
        <div
          key={item.id || index}
          className="border-2 border-gray-500 rounded-lg py-2 m-4 px-4 relative hover:shadow-xl"
        >
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {item.publishedYear}
          </h2>
          <h4 className="my-2 text-gray-500 ">{item.id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-2">{item.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1 ">{item.author}</h2>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
              <Link to={`/books/details/${item._id}`}>
                <BiUserCircle className="text-2xl text-green-800 hover:text-black " />
              </Link>
              <Link to={`/books/edit/${item.id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
              </Link>
              <Link to={`book/delete/${item.id}`}>
                <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BooksCard;
