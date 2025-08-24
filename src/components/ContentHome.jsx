import { BlogList } from "./BlogList";

const ContentHome = ({ blogSize, isLoading, error, data, setData }) => {
  return (
    <div className="home">
      {/* Error message */}
      {error && (
        <p
          style={{
            color: "red",
          }}
        >
          Error: {error}
        </p>
      )}

      {/* Blog count (shown only if loaded and no error) */}
      {!isLoading && !error && (
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          Items Left: {blogSize}
        </p>
      )}

      {/* Loading or Blog list */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && <BlogList blogs={data} setBlogs={setData} />
      )}
    </div>
  );
};

export default ContentHome;
