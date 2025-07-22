const UseDeleteBlog = (id, data, setData) => {
  const newBlogs = data?.filter((data) => data?.id !== id);

  setData(newBlogs);

  return { newData: data };
};

export default UseDeleteBlog;
