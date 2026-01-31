import axios from "axios";
import { useEffect, useState } from "react";
import config from "../Constants/enviroment";

const useGet = (endPoint, query = {}) => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isMounted) return;
      setLoading(true);

      try {
        const res = await axios.get(`${config.baseUrl}/${endPoint}`, {
          params: { per_page: 10, page, ...query },
        });
        if (!isMounted) return;
        const dataResult = res.data.items ? res.data.items : res.data;
        setData(dataResult);
        console.log(res);
        // prev or next pages
        const link = res.headers.link || "";
        setHasNext(link.includes('rel="next"'));
        setHasPrev(link.includes('rel="prev"'));
      } catch (err) {
        console.log(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    }; // حماية من تحديث state بعد unmount
  }, [page, endPoint, JSON.stringify(query)]);

  return [data, page, setPage, hasNext, hasPrev, loading];
};

export default useGet;
