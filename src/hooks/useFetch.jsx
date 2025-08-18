import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!endpoint) return; // Exit func if no endpoint

    // Abort controller
    const abortController = new AbortController();

    const fetchBlogs = async () => {
      setIsLoading(true); // ✅ Set loading true before fetch starts (added)
      setError(""); // ✅ Clear previous error before new fetch (added)

      try {
        const res = await fetch(endpoint, abortController.signal);

        if (!res.ok) {
          // ✅ Handle non-OK HTTP responses explicitly (added)
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted"); // Log fetch abort
        } else {
          setError(error.message); // set error message
        }
      } finally {
        setIsLoading(false); // ✅ Ensure loading state is turned off in all cases (added)
      }
    };

    fetchBlogs(); // Removed redundant if-check around this call (simplified)

    return () => abortController.abort();
  }, [endpoint]);

  return { data, isLoading, error, setData };
};

export default useFetch;
