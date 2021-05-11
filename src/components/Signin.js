import React, { useState, useContext } from "react";
import { useHistory , Link} from "react-router-dom";
import { UserContext } from "../App";

function Signin() {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [name, setName] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const submit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user.name === name) {
      if (user.password === password) {
        alert("Succesfully Signed In");
        dispatch({ type: "USER", payload: user });
        history.push("/");
      } else {
        alert("Invalid Password or User Name");
      }
    } else {
      alert("Invalid Password or User Name");
    }
  };

  return (
    <div>
      <div>
        <div className="card my-card">
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="waves-effect waves-light btn submit"
            onClick={() => submit()}
          >
            Submit
          </button>
          <p className="account">
            Don't have account? <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
