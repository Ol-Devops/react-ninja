import ContentHome from "./ContentHome";
import useFetch from "../hooks/useFetch";
import useDeleteBlog from "../hooks/useDeleteBlog"; // ✅ ADDED: import the custom delete hook

const Home = () => {
  const endpoint = "http://localhost:8050/blogs";

  // ✅ EXISTING: fetch data using custom fetch hook
  const { data, isLoading, error, setData } = useFetch(endpoint);

  // ✅ REPLACED INLINE FUNCTION: use custom hook instead
  const { deleteBlog } = useDeleteBlog(data, setData);

  const blogSize = data?.length;

  return (
    <>
      <ContentHome
        blogSize={blogSize}
        deleteBlog={deleteBlog} // ✅ PASSES deleteBlog from hook as prop
        isLoading={isLoading}
        error={error}
        data={data}
      />
    </>
  );
};

export default Home;
