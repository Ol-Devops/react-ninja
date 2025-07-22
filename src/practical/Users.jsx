import { useState, useEffect } from "react";
import UserData from "./UserData";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [userNum, setUserNum] = useState(0);

  const [isError, setIsError] = useState(false); // ✅ Fixed typo: was `setisError`
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Changed from {} to "" for easier rendering

  useEffect(() => {
    if (!userNum) {
      setUserNum(0);
      setUserData([]);

      console.log("Empty!");

      return;
    }

    const fetchUsers = async () => {
      try {
        // ✅ Moved inside useEffect to avoid stale value
        const endpoint = `https://api.github.com/users?per_page=${userNum}`;

        const res = await fetch(endpoint);

        // ✅ Added check for non-2xx responses
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();
        setUserData(data);
        setIsError(false); // ✅ Reset error state on success
        setErrorMessage("");
      } catch (error) {
        // ✅ Use error.message for clarity
        console.error(`Request Error: ${error.message}`);
        setIsError(true);
        // ✅ Set string instead of object
        setErrorMessage(error.message);
        // ✅ Clear previous data on error
        setUserData([]);
      }
    };

    fetchUsers(); // ✅ Fixed: was `fetchUsers(endpoint)`
  }, [userNum]); // ✅ Changed dependency from `endpoint` to `userNum` (more correct)

  return (
    <div>
      <h1>Users</h1>

      <p>Enter user number</p>
      <input
        type="number"
        min="1"
        onChange={(e) => setUserNum(e.target.value)}
      />

      <br />

      {isError ? (
        <h2 style={{ color: "red" }}>Error! {errorMessage}</h2> // ✅ Proper error rendering
      ) : (
        <UserData userData={userData} />
      )}
    </div>
  );
};

export default Users;
