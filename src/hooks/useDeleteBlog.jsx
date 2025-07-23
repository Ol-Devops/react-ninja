const useDeleteBlog = (data, setData) => {
  // ✅ deleteBlog function extracted from Home
  const deleteBlog = (id) => {
    const updatedData = data?.filter((item) => item?.id !== id);
    setData(updatedData); // ✅ Updates state after filtering out deleted blog
  };

  return { deleteBlog }; // ✅ Returns the function for external use
};

export default useDeleteBlog;
