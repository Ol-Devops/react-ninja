import { useHistory } from "react-router-dom/cjs/react-router-dom";

const useDeleteBlog = () => {
  const history = useHistory();

  // deleteBlog is now a stable function, not recreated on every render
  const deleteBlog = (endpoint) => {
    fetch(endpoint, { method: "DELETE" }).then(() => {
      history.push("/");
    });
  };

  return { deleteBlog };
};

export default useDeleteBlog;
