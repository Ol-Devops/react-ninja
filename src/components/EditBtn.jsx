import useEdit from "../hooks/useEdit";

const EditBtn = ({ endpoint, updatedData }) => {
  const { editBlog } = useEdit();

  const handleEdit = () => {
    editBlog(endpoint, updatedData);
  };
  return (
    <div>
      <div>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default EditBtn;
