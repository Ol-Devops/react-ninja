import { BlogList } from "./BlogList";

const ContentHome = ({ blogSize, deleteBlog, isLoading, error, data }) => {
  return (
    <div className="home">
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      {!isLoading && !error ? (
        <p style={{ fontSize: "1.2rem" }}>Items Left: {blogSize}</p>
      ) : (
        <div></div>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && <BlogList blogs={data} deleteBlog={deleteBlog} />
      )}
    </div>
  );
};

export default ContentHome;
