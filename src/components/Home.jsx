import ContentHome from "./ContentHome";
import useFetch from "../hooks/useFetch";
import useDeleteBlog from "../hooks/useDeleteBlog";
import { API_ENDPOINTS } from "../config/apiConfig"; // ✅ Import API endpoints

const Home = () => {
  const { BLOGS: endpoint } = API_ENDPOINTS; // ✅ Use config for endpoint

  // ✅ EXISTING: fetch data using custom fetch hook
  const { data, isLoading, error, setData } = useFetch(endpoint);

  // ✅ REPLACED INLINE FUNCTION: use custom hook instead
  const { deleteBlog } = useDeleteBlog(data, setData);

  const blogSize = data?.length;

  return (
    <>
      <ContentHome
        blogSize={blogSize}
        deleteBlog={deleteBlog}
        isLoading={isLoading}
        error={error}
        data={data}
      />
    </>
  );
};

export default Home;
