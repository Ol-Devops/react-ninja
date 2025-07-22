import { BlogList } from "./BlogList";
import useFetch from "../hooks/useFetch";
import ContentHome from "./ContentHome";

const Home = () => {
  const endpoint = "http://localhost:8050/blogs";

  const { data, isLoading, error, setData } = useFetch(endpoint);

  const deleteBlog = (id) => {
    const newBlogs = data?.filter((data) => data?.id !== id);

    setData(newBlogs);
  };

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
