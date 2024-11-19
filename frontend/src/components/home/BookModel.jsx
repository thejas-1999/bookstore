import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-4 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-full px-4 py-1 bg-red-300 rounded-lg">
          {book.publishedYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-2">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>

        {/* Display the price in the modal */}
        <div className="mt-4 text-lg font-bold text-green-600">
          Price: ${book.price}
        </div>

        <p className="mt-4">Additional details about the book...</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veniam
          nihil vel placeat cumque quis alias quas corporis aliquam dicta est
          error repellendus odit quia earum vitae dolorum explicabo.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
