import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");

  const [isPending, setIsPending] = useState(false);

  const resetForm = () => {
    setTitle("");
    setBody("");
    setAuthor("Mario");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const blog = { title, body, author };
    console.log(blog);

    fetch("http://localhost:8050/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false); // Move this here so form resets after loading is done
      resetForm();
    });
  };

  return (
    <>
      <div className="create">
        <h2>Add new Blog</h2>

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
            onChange={(e) => setBody(e.currentTarget.value)}
          ></textarea>

          <label>Blog Author</label>

          <select
            value={author}
            onChange={(e) => setAuthor(e.currentTarget.value)}
          >
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>

          {!isPending && <button>Add Blog</button>}

          {isPending && (
            <button
              disabled
              style={{
                backgroundColor: "#1a202c", // dark blue-gray
                color: "#fff",
                opacity: 0.7,
                cursor: "not-allowed",
                border: "none",
                padding: "0.5rem 1.5rem",
                borderRadius: "4px",
              }}
            >
              Adding Blog...
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Create;
