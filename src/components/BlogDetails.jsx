import { IoMdArrowRoundBack } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8050/blogs/${id}`);

  const { title, author, body } = blog;

  return (
    <div className="blog-details">
      <Link
        to="/"
        className="inline-block mb-2 hover:text-orange-500 transition-colors"
      >
        <BiArrowBack className="text-6xl text-orange-500 cursor-pointer transition-shadow hover:shadow-[0_0_10px_2px_rgba(255,165,0,0.7)]" />
      </Link>

      <br />
      <br />

      <h1>Blog Details {id}</h1>

      {isLoading && <div>Loading</div>}

      {error && <div>error</div>}

      {blog && (
        <article>
          <h2>{title}</h2>

          <p>Written by: {author}</p>

          <div>{body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
