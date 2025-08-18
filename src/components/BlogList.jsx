import { Link } from "react-router-dom/cjs/react-router-dom";

// accessing the props object
export const BlogList = ({ blogs, deleteBlog }) => {
  //   const blogs = props.blogs;
  //   const comments = props.comments;

  return (
    <div className="blog-list">
      <div>
        {/* Destructuring the props */}
        {blogs.map(({ title, body, author, id }) => (
          <div className="blog-preview" key={id}>
            <Link
              to={`/blogs/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1>{title}</h1>
              <h2>Written by: {author}</h2>
              <p>{body}</p>
            </Link>
            <br />
            <button onClick={() => deleteBlog(id)}>Delete</button>
          </div>
        ))}
      </div>

      <br />
    </div>
  );
};
