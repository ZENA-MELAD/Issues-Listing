import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
const HeaderIssue = ({ title, state }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start  items-start gap-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex justify-center items-center gap-1 bg-gray-200 rounded-3xl px-5 py-1 text-lg  cursor-pointer hover:bg-gray-300"
      >
        <span>
          <FaLongArrowAltLeft size={14} />
        </span>
        <span>Back</span>
      </button>
      <div className="flex items-start gap-x-5">
        <h2 className="text-xl md:text-4xl font-semibold">{title}</h2>
        <span className={`${state==="open"?"bg-green-700":"bg-red-700"} rounded-4xl px-7 py-1 text-white capitalize font-semibold mt-1 md:mt-2`} >{state}</span>
      </div>
    </div>
  );
};

export default HeaderIssue;
