import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    // To abort the fetch request
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {
          // Link the abourt to the specific fetch it needs to watch
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbbortError") {
          console.log("The fetch was aborted.");
        } else {
          setIsPending(false);
          setError("Could not fetch the data.");
        }
      }
    };

    fetchData();

    // If error in fetchData is abort then this will run
    return () => {
      controller.abort();
    };
  }, [url]);
  
  return { data, error, isPending };
}
