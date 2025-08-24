import { Link } from "react-router-dom/cjs/react-router-dom";
import DeleteBtn from "./DeleteBtn";
import API_ENDPOINTS from "../config/apiConfig"; // <-- updated import

export const BlogList = ({ blogs, setBlogs }) => {
  const endpoint = API_ENDPOINTS.BLOGS; // <-- updated usage

  // Remove blog from UI after deletion
  const handleDelete = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

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
            <div className="btn-group">

            <DeleteBtn
              endpoint={`${endpoint}/${id}`}
              onDelete={() => handleDelete(id)}
            />
            <Link to={`/edit/${id}`}>
              <button className="edit-btn">Edit</button>
            </Link>
            </div>
          </div>
        ))}
      </div>

      <br />
    </div>
  );
};
