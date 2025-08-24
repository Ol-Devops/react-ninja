import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!endpoint) return;

    const abortController = new AbortController();

    const fetchBlogs = async () => {
      setIsLoading(true);
      setError("");

      try {
        const res = await fetch(endpoint, { signal: abortController.signal });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setData(data);
      } catch (error) {
        if (error.name === "AbortError") {
          // Suppress AbortError so it doesn't throw to the console
          return;
        }
        setError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();

    return () => {
      abortController.abort();
    };
  }, [endpoint]);

  return { data, isLoading, error, setData };
};

export default useFetch;
