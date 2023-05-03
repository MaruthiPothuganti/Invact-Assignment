export const UserTile = ({ user }) => {
  return (
    <div className="user">
      <span>{user.isMuted ? "🔇" : "🔊"}</span>
      <div className="userIcon">
        <p>{user.name.charAt(0)}</p>
      </div>
      <p>{user.name}</p>
    </div>
  );
};
