import React, { useEffect } from "react";
import axios from "axios";

export default function InfiniteHooks(query,pageNumber) {
    let cancel
  useEffect(() => {
    axios({
        url:"https://openlibrary.org/search.json", 
        params: { q: query, page: pageNumber },
        cancelToken: new axios.CancelToken(c=>cancel=c)
      })
      .then((res) => {
        console.log(res.data);
      });
      return ()=>cancel()
  }, [query, pageNumber]);
  return null;
}
