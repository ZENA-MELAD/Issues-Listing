import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
const Body = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 500;
  if (!text) return <p className="text-gray-500">No description provided.</p>;
  const shortText = text.length > limit ? text.slice(0, limit) + "..." : text;
  return (
    <div className=" w-full max-w-4xl rounded-3xl border border-gray-50  shadow-sm p-4  text-sm text-gray-800 mt-4 overflow-hidden  md:text-base md:p-6
    ">
      {expanded ? <ReactMarkdown skipHtml>{text}</ReactMarkdown> : <ReactMarkdown skipHtml>{shortText}</ReactMarkdown>}
      {text.length <= limit ? (
        <></>
      ) : (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 ml-2 underline capitalize cursor-pointer"
        >
          {expanded ? "show less" : "show more"}
        </button>
      )}
    </div>
  );
};

export default Body;
