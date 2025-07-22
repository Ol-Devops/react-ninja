
const UserData = ({userData}) => {
  return (
    <div>
      <p>Count: {userData.length}</p>
      <div className="git-hub">
        {userData.length > 0 ? (
          userData.map(({ id, avatar_url, login }) => (
            <div key={id}>
              <ul>
                <li>
                  <img src={avatar_url} alt="avatar" width={50} />
                </li>
                <li>Name: {login}</li>
              </ul>
            </div>
          ))
        ) : (
          <p>No users to display</p> // ✅ Added fallback when array is empty
        )}
      </div>
    </div>
  );
}

export default UserData
