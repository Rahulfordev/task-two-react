/* eslint-disable react/prop-types */ 
const UserList = ({ user: { name, avatar, bio } }) => {
  console.log(avatar);
  return (
    <div className="user__container">
      <img src={avatar} alt="user-image" />
      <div className="user__details">
        <h4 className="user__name">{name}</h4>
        <p className="user__bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserList;
