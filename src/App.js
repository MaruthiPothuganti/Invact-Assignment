import "./styles.css";
import { UserTile } from "./components/UserTile";
import { userData } from "./utils/users";
import { UserList } from "./components/UserList";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState(userData);

  function clickHandler(id) {
    setUsers(
      users.map((user) =>
        id === user.id ? { ...user, isMuted: !user.isMuted } : user
      )
    );
  }

  return (
    <div className="App">
      <div className="usersContainer">
        {users.map((user) => {
          return <UserTile user={user} />;
        })}
      </div>
      <div className="userList">
        <h2>Participants</h2>
        <UserList users={users} clickHandler={clickHandler} />
      </div>
    </div>
  );
}
