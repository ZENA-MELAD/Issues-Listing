import React, { useEffect, useState } from "react";
import Issues from "../../components/Issues/Issues";
import config from "../../Constants/enviroment";
import useGet from "../../Custom Hooks/useGet";
import Loading from "../../components/loading/loading";
import FilterIssues from "../../components/FilterIssues/FilterIssues";
import useDebounce from "../../Custom Hooks/useDebounce";
const MainIssueListing = () => {
  const [searchText, setsearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);
  const [status, setStatus] = useState("all");
  const query = debouncedSearch
    ? {
        q: `repo:facebook/react ${debouncedSearch} in:title,body${status !== "all" ? ` state:${status}` : ""}`,
      }
    : status !== "all"
      ? { state: status }
      : {};

  const endpoint = debouncedSearch ? config.search : config.issues;
  const [issues, page, setPage, hasNext, hasPrev, loading] = useGet(
    endpoint,
    query,
  );
  const isSearchMode = Boolean(debouncedSearch);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);
  return (
    <div className="p-5 flex flex-col items-center">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <FilterIssues
            text={searchText}
            onSearch={setsearchText}
            status={status}
            onStatusChange={(val) => {
              setStatus(val);
              setPage(1);
            }}
          />
          <Issues
            issues={issues}
            page={page}
            setPage={setPage}
            hasNext={hasNext}
            hasPrev={hasPrev}
            isSearchMode={isSearchMode}
          />
        </>
      )}
    </div>
  );
};

export default MainIssueListing;
