import ContentHome from "./ContentHome";
import useFetch from "../hooks/useFetch";
import useDeleteBlog from "../hooks/useDeleteBlog";
import API_ENDPOINTS from "../config/apiConfig"; // <-- updated import

const Home = () => {
  const endpoint = API_ENDPOINTS.BLOGS; // <-- updated usage

  const { data, isLoading, error, setData } = useFetch(endpoint);
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
        setData={setData}
      />
    </>
  );
};

export default Home;
