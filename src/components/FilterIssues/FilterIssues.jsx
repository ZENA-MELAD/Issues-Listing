import { IoSearchOutline } from "react-icons/io5";
const FilterIssues = ({ text, onSearch, status, onStatusChange }) => {
  return (
    <div className="w-full flex justify-center gap-4">
      <div className="w-3/4 mb-3.5 bg-gray-100 border border-gray-300 rounded-lg flex justify-between items-center">
        <input
          type="search"
          value={text}
          className="w-full p-1.5 bg-white rounded-l-md outline-blue-600"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="w-10 flex justify-center items-center">
          <IoSearchOutline />
        </div>
      </div>
      <div className=" flex justify-center items-start gap-3 pt-1 ">
        <button
          className={`${status === "all" ? "bg-green-400" : "bg-gray-200 hover:bg-gray-400"} rounded-lg capitalize px-3 py-1 cursor-pointer`}
          onClick={() => onStatusChange("all")}
        >
          all
        </button>
        <button
          className={`${status === "open" ? "bg-green-400" : "bg-gray-200 hover:bg-gray-400"} rounded-lg  capitalize px-3 py-1 cursor-pointer`}
          onClick={() => onStatusChange("open")}
        >
          open
        </button>
        <button
          className={`${status === "closed" ? "bg-green-400" : "bg-gray-200 hover:bg-gray-400"} rounded-lg  capitalize px-3 py-1 cursor-pointer`}
          onClick={() => onStatusChange("closed")}
        >
          closed
        </button>
      </div>
    </div>
  );
};

export default FilterIssues;
