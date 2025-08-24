import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
import BackBtn from "./BackBtn";
import API_ENDPOINTS from "../config/apiConfig";
import DeleteBtn from "./DeleteBtn";

const BlogDetails = () => {
  const { id } = useParams();
  const endpoint = API_ENDPOINTS.BLOGS;

  const idAPI = `${endpoint}/${id}`;
  const { data: blog, isLoading, error } = useFetch(idAPI);

  const { title, author, body } = blog;

  return (
    <div className="blog-details">
      <BackBtn />

      <h1>Blog Details {id}</h1>

      {isLoading && <div>Loading</div>}

      {error && <div>error</div>}

      {blog && (
        <article>
          <h2>{title}</h2>

          <p>Written by: {author}</p>

          <div>{body}</div>

          <DeleteBtn endpoint={idAPI} />
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
