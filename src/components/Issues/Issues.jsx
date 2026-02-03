import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Issues = ({ issues, page, setPage, hasNext, hasPrev, isSearchMode }) => {
  const navigate=useNavigate()
  const handleNavigate=(id)=>{
console.log(id)
navigate(`/detail/${id}`)
  }
  return (
    <div className="w-full flex flex-col items-center gap-y-3">
      {/* desktop design */}
      <div className="hidden  overflow-hidden lg:block lg:w-full  rounded-lg border border-gray-200 xl:w-11/12">
        <table className=" border-collapse w-full">
          <thead className="bg-gray-100">
            <tr className="capitalize text-left">
              <th className="p-2">issue</th>
              {isSearchMode && <th>body</th>}
              <th>status</th>
              <th className="w-1/5 lg:w-fit">author</th>
              <th>date</th>
              </tr>
          </thead>
          <tbody>
            {issues &&
              issues.map((issue) => (
                <tr
                  key={issue.id}
                  className="hover:bg-gray-100 border-b border-gray-200 cursor-pointer"
                  onClick={()=>handleNavigate(issue.number)}
                >
                  <td className="w-1/3  p-2">{issue.title}</td>
                  {isSearchMode && <td className="max-w-md line-clamp-3 pt-2">{issue.body}</td>}
                  <td
                    className={`${issue.state === "open" ? "text-green-400" : "text-red-400"}  p-2`}
                  >
                    {issue.state}
                  </td>
                  <td className=" p-2">{issue.user.login}</td>
                  <td className=" p-2">
                    {new Date(issue.created_at).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* mobile design  */}
      <div className="w-full space-y-3 lg:hidden">
        {issues &&
          issues.map((issue) => (
            <div
              key={issue.id}
              className=" w-full border border-gray-300 rounded-lg p-3 shadow-sm cursor-pointer"
              onClick={()=>handleNavigate(issue.number)}
             >
              <h3 className="font-semibold mb-2">{issue.title}</h3>
              {isSearchMode && (
                <div className="text-sm flex justify-between">
                  <span className="font-semibold">Body:</span>
                  <span className="line-clamp-2">{issue.body}</span>
                </div>
              )}
              <div className="text-sm flex justify-between">
                <span className="font-semibold">Status:</span>
                <span
                  className={
                    issue.state === "open" ? "text-green-400" : "text-red-400"
                  }
                >
                  {issue.state}
                </span>
              </div>
              <div className="text-sm flex justify-between">
                <span className="font-semibold">Author:</span>
                <span>{issue.user.login}</span>
              </div>
              <div className="text-sm flex justify-between">
                <span className="font-semibold">Date:</span>
                <span>
                  {new Date(issue.created_at).toLocaleDateString("en-GB")}
                </span>
              </div>
            </div>
          ))}
      </div>
      {/* button navigate between pages */}
      <div className="flex gap-x-3 items-center">
        <button
          disabled={!hasPrev}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="flex items-center gap-x-0.5  text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <IoIosArrowBack />
          <span>Prev</span>
        </button>
        <span> Page {page}</span>
        <button
          disabled={!hasNext}
          onClick={() => setPage((prev) => prev + 1)}
          className="flex items-center gap-x-0.5 text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>Next</span>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Issues;
