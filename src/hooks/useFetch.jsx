import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState("");

  useEffect(() => {
    if (!endpoint) return; // Exit func if no endpoint

    const fetchBlogs = async () => {
      setIsLoading(true); // ✅ Set loading true before fetch starts (added)
      setIsError(""); // ✅ Clear previous error before new fetch (added)

      try {
        const  res = await fetch(endpoint);

        if (!res.ok) {
          // ✅ Handle non-OK HTTP responses explicitly (added)
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        setIsError(error.message); // set error message
      } finally {
        setIsLoading(false); // ✅ Ensure loading state is turned off in all cases (added)
      }
    };

    fetchBlogs(); // Removed redundant if-check around this call (simplified)
  }, [endpoint]);

  return { data, isLoading, error, setData };
};

export default useFetch;
