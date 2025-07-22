import { useState, useEffect } from "react";

const Case = ({ filterData, deleteCase }) => {
  //* All sates are here
  const [queryData, setQueryData] = useState(""); // Manual dropdown
  const [autoData, setAutoData] = useState(""); // Text input
  const [isChecked, setIsChecked] = useState(false); // 🟢 Controls filter mode
  const [newData, setNewData] = useState(filterData);
  const [hits, setHits] = useState(0);

  //* All Event Handlers
  const handleSelect = (e) => {
    console.log(e.target.value);

    setQueryData(e.target.value);
  };

  // 🟢 Auto filter logic, based on mode
  const handleAutoFilter = (e) => {
    //Reset drop down menu
    if (queryData !== "") {
      setQueryData("");
    }

    const value = e.target.value;
    setAutoData(value);

    let filtered = [];

    //TODO: This is temorary, use a switch to flip between search modes
    if (isChecked) {
      // If checkbox is checked, filter by matter
      filtered = filterData.filter((item) =>
        item.matter.toLowerCase().startsWith(value.toLowerCase(), 0)
      );
    } else {
      // Otherwise, filter by author
      filtered = filterData.filter((item) =>
        item.author.toLowerCase().includes(value.toLowerCase())
      );
    }

    setNewData(filtered.length > 0 ? filtered : []);
    setHits(filtered.length > 0 ? filtered.length : "Zero search hits!");
  };

  // 🟢 Toggle filter mode (author vs matter)
  const handleCheck = (e) => {
    const { checked } = e.target;
    setIsChecked(checked);

    // Optional: re-run auto filter immediately
    if (autoData) {
      const filtered = filterData.filter((item) => {
        const search = autoData.toLowerCase();
        return checked
          ? item.matter.toLowerCase().includes(search)
          : item.author.toLowerCase().includes(search);
      });

      setNewData(filtered.length > 0 ? filtered : []);
      setHits(filtered.length > 0 ? filtered.length : "Zero search hits!");
    }
  };

  //* Run Side Effects after event handlers are executed
  // 🟢 Filter by manual dropdown (queryData)
  useEffect(() => {
    if (queryData) {
      const filtered = filterData.filter((item) => item.author === queryData);
      setNewData(filtered);

      console.log("Here:", newData.length);

      setHits(filtered.length || "Zero search hits!");
    } else if (!autoData && !isChecked) {
      setNewData(filterData);
      setHits("");
    } else {
      console.log("Run");

      console.log("inside Child useEffect", newData.length);
    }
  }, [queryData, filterData, autoData, isChecked, newData]);

  return (
    <div>
      <h3>Search Hits: {hits}</h3>
      <h3>Current Items: {newData.length}</h3>

      {/* Manual Dropdown Filter */}
      <div>
        <h4>Manual Filter</h4>
        <label htmlFor="author">Select Author:</label>
        <br />
        <select id="author" value={queryData} onChange={handleSelect}>
          <option value="">-- Select Author --</option>
          <option value="NKA">NKA</option>
          <option value="BLW">BLW</option>
          <option value="SCN">SCN</option>
        </select>
      </div>

      <br />

      {/* Auto Filter Mode Switch */}
      <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheck}
              />
              Search by Matter instead of Author
            </label>
          </li>
        </ul>

        <h4>Auto Filter</h4>
        <input
          type="text"
          placeholder={`Type ${isChecked ? "matter" : "author"}`}
          value={autoData}
          onChange={handleAutoFilter}
        />
      </div>

      {/* Filtered Results */}
      <div>
        {newData.map(({ id, matter, file, author, units }) => (
          <div
            key={id}
            style={{
              backgroundColor: "lightblue",
              color: "darkblue",
              padding: "5px 15px",
              border: ".5px solid gray",
              margin: "1rem 15rem 1rem 0",
            }}
          >
            <p>ID: {id}</p>
            <p>Matter: {matter}</p>
            <p>File: {file}</p>
            <p>Author: {author}</p>
            <p>Units Billed: {units}</p>
            <button onClick={() => deleteCase(id, newData)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Case;
