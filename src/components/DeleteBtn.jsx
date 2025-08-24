import useDeleteBlog from "../hooks/useDeleteBlog";

const DeleteBtn = ({ endpoint, onDelete }) => {
  const { deleteBlog } = useDeleteBlog();

  const handleDelete = () => {
    deleteBlog(endpoint);
    if (onDelete) onDelete();
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBtn;
