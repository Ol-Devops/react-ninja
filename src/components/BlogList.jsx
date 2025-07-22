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
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{body}</p>
            <br />
            <button onClick={() => deleteBlog(id)}>Delete</button>
          </div>
        ))}
      </div>

      <br />
    </div>
  );
};
