import { useState } from "react";

const Register = ({ users, registerUser }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if(handleValidation()) {
      const newUser = {
        username,
        email,
        password
      }
      registerUser(newUser);
      return;                     // guarantees alert is not happening if handleValidation passed successfully
    }
    // handle errors with validation here (not coded in lab)
  };

  const handleValidation = () => {
    let validation = true;

    if(users.find(user => user.username === username)) {      // finding a user with the same name; if so will return false
      alert("User already exists!");
      validation = false;
    }

    if(password !== confirmPassword) {        // if password does not equal confirm password, returns false
      alert("Passwords do not match!");
      validation = false;
    }

    if(username === "" || email === "" || password === ""){     // if username or email or password are empty, returns false
      alert("Please fill in all fields!");
      validation = false;
    }

    return validation;            // return validation variable. If passed, will equal true. 
  };

  return (
    <>
      <h2>Sign up!</h2>
      <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input 
            type="text"
            name="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input 
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Enter Password Again"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <input 
            type="submit"
            value="Submit"
          /> 
      </form>
    </>
  );
};

export default Register;
