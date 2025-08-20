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
      <Link to="/">
        <BiArrowBack
          style={{
            fontSize: "1.5rem",
            color: "#1976d2", // blue
            borderRadius: "50%",
            cursor: "pointer",
            verticalAlign: "middle",
            transition: "color 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 12px 2px rgba(100,181,246,0.5)"; // light blue glow
            e.currentTarget.style.color = "#64b5f6"; // light blue
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.color = "#1976d2"; // revert to blue
          }}
        />
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
