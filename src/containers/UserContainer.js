import { useState } from "react";
import UserList from "../components/UserList";
import Register from "../components/Register";

const UserContainer = () => {
  const [users, setUsers] = useState([]);

  const registerUser = (newUser) => {     // takes in newUser object
    setUsers([...users, newUser]);
  };

  return (
    <>
      <UserList users={users} />
      <Register users={users} registerUser={registerUser}/>    
    </>
  );
};

export default UserContainer;
