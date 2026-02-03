import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Comments = ({ comments, loadingComments }) => {
  const limit = 500;
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mt-2.5">
      {loadingComments && (
        <p className="text-lg font-medium">Loading comments...</p>
      )}
      {comments.map((comment) => (
        <div key={comment.id} className=" w-full max-w-4xl rounded-3xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={comment.user.avatar_url}
              className="w-10 h-10 rounded-full object-contain"
            />
            <span className="font-semibold">{comment.user.login}</span>
            <span className="text-sm text-gray-400 mt-0.5">
              {new Date(comment.created_at).toLocaleDateString("en-GB")}
            </span>
          </div>
          <div className="w-full overflow-hidden wrap-break-word text-sm md:text-base">
            <ReactMarkdown skipHtml>
             {expanded?comment.body:comment.body.length>limit?comment.body.slice(0,limit)+"...":comment.body}
            </ReactMarkdown>
            {comment.body.length <= limit ? (
              <></>
            ) : (
              <button
                onClick={() => setExpanded(prev=>!prev)}
                className="text-blue-600 cursor-pointer ml-2 underline capitalize"
              >
                {expanded ? "show less" : "show more"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
