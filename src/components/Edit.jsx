import { useState, useEffect } from "react";
import BackBtn from "./BackBtn";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useEdit from "../hooks/useEdit";
import API_ENDPOINTS from "../config/apiConfig";
import useFetch from "../hooks/useFetch"; // <-- import your fetch hook

const Edit = () => {
  const { BLOGS: endpoint } = API_ENDPOINTS;
  const { id } = useParams(); // id will work if route is /edit/:id

  const { editBlog } = useEdit();
  const history = useHistory();

  // Fetch the current blog data
  const { data: blog, isLoading, error } = useFetch(`${endpoint}/${id}`);

  // Local state for form fields
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPending, setIsPending] = useState(false);

  // When blog data is loaded, set form fields
  useEffect(() => {
    if (blog && blog.title) setTitle(blog.title);
    if (blog && blog.body) setBody(blog.body);
    if (blog && blog.author) setAuthor(blog.author);
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    editBlog(`${endpoint}/${id}`, { title, body, author })
      .then(() => {
        setIsPending(false);
        history.push("/");
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setIsPending(false);
      });
  };

  return (
    <>
      <BackBtn />
      <div className="create">
        <h2>Edit Blog</h2>
        {isLoading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
        {!isLoading && !error && (
          <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <label>Blog Body</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <label>Blog Author</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="Mario">Mario</option>
              <option value="Yoshi">Yoshi</option>
            </select>
            {!isPending && <button>Update</button>}
            {isPending && (
              <button
                disabled
                style={{
                  backgroundColor: "#1a202c",
                  color: "#fff",
                  opacity: 0.7,
                  cursor: "not-allowed",
                  border: "none",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "4px",
                }}
              >
                Updating Blog...
              </button>
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default Edit;
