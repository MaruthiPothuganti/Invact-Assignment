export const UserList = ({ users, clickHandler }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <section
            class="singleUser"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <span>{user.name}</span>
            <button onClick={() => clickHandler(user.id)}>
              {user.isMuted ? "unmute" : "mute"}
            </button>
          </section>
        );
      })}
    </div>
  );
};
