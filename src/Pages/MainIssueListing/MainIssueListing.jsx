import React from "react";
import Issues from "../../components/Issues/Issues";
import config from "../../Constants/enviroment";
import useGet from "../../Custom Hooks/useGet";
import Loading from "../../components/loading/loading";

const MainIssueListing = () => {
  const [issues, page, setPage, hasNext, hasPrev, loading] = useGet(
    config.allIssues,
  );
  return (
    <div className="p-5">
      {loading === true ? (
       <Loading/>
      ) : (
        <Issues
          issues={issues}
          page={page}
          setPage={setPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      )}
    </div>
  );
};

export default MainIssueListing;
