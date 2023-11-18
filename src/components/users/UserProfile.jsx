/* eslint-disable react/prop-types */
import UserList from "./UserList";
import './user.css'

const UserProfile = ({userInfo}) => { 
  let mapData = userInfo.map((user, index) => (
    <UserList key={index} user={user} />
  ));
  return (
    <section className="users-section">
        {mapData}
    </section>
  )
};

export default UserProfile;
