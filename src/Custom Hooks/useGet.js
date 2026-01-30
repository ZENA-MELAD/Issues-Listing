import axios from "axios";
import { useEffect, useState } from "react";
import config from "../Constants/enviroment";

const useGet = (endPoint) => {
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
          params: { per_page: 10, page }, // تمرير الصفحة وعدد العناصر
        });

        if (!isMounted) return;
        setData(res.data);

        // التحقق من وجود صفحات سابقة أو تالية
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

    return () => { isMounted = false }; // حماية من تحديث state بعد unmount
  }, [page, endPoint]);

  return [data, page, setPage, hasNext, hasPrev, loading];
};

export default useGet;
