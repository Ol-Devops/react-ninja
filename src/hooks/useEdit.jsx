const useEdit = () => {
  const editBlog = (endpoint, updatedData) => {
    return fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }).then(() => {
      console.log("Blog updated");
    });
  };

  return { editBlog };
};

export default useEdit;
