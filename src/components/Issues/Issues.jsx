import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Issues = ({issues,page,setPage,hasNext,hasPrev}) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-3">
      {/* desktop design */}
      <div className="hidden md:block overflow-hidden w-full  rounded-lg border border-gray-200">
        <table className=" border-collapse min-w-4xl lg:w-full">
          <thead className="bg-gray-100">
            <tr className="capitalize text-left">
              <th className="p-2">issue</th>
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
                >
                  <td className="w-1/3 lg:w-2/3 p-2">{issue.title}</td>
                  <td
                    className={`${issue.state === "open" ? "text-green-400" : "text-red-400"}`}
                  >
                    {issue.state}
                  </td>
                  <td className="w-1/5 lg:w-fit">{issue.user.login}</td>
                  <td className="">
                    {new Date(issue.created_at).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
     {/* mobile design  */}
      <div className="w-full space-y-3 md:hidden">
        {issues &&
          issues.map((issue) => (
            <div
              key={issue.id}
              className="border border-gray-300 rounded-lg p-3 shadow-sm"
            >
              <h3 className="font-semibold mb-2">{issue.title}</h3>

              <div className="text-sm flex justify-between">
                <span>Status:</span>
                <span
                  className={
                    issue.state === "open" ? "text-green-400" : "text-red-400"
                  }
                >
                  {issue.state}
                </span>
              </div>

              <div className="text-sm flex justify-between">
                <span>Author:</span>
                <span>{issue.user.login}</span>
              </div>

              <div className="text-sm flex justify-between">
                <span>Date:</span>
                <span>
                  {new Date(issue.created_at).toLocaleDateString("en-GB")}
                </span>
              </div>
            </div>
          ))}
      </div>
      {/* button navigate between pages */}
      <div className="flex gap-x-3 items-center">
        <button disabled={!hasPrev} onClick={() => setPage((prev) => Math.max(prev - 1, 1))} className="flex items-center gap-x-0.5  text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50">
         <IoIosArrowBack  /> 
         <span>Prev</span>
        </button>
        <span> Page {page}</span>
        <button disabled={!hasNext} onClick={() => setPage((prev) => prev + 1)} className="flex items-center gap-x-0.5 text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50">
           <span>Next</span>
          <IoIosArrowForward />
          </button>
      </div>
    </div>
  );
};

export default Issues;
