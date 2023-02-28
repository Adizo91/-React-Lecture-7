import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  const submitHandler = (evt) => {
    evt.preventDefault();
    const {
      username: { value: usernameValue },
      password: { value: passwordValue },
    } = evt.target;

    console.log({ usernameValue, passwordValue });

    if (usernameValue !== "bobo" || passwordValue !== "12345") {
      setHasError(true);
      return;
    }

    navigate("/", { state: { username: usernameValue } });
  };
  //};

  return (
    <div className="Login">
      <h1>Log In Screen</h1>
      {hasError && <div>Invalid Credentials</div>}
      <form onClick={() => setHasError(false)} onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          id="username-input"
          placeholder="Enter User Name"
        />
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Enter Password"
        />
        <button type="submit">Log In</button>
      </form>

      <Link to="/Register">Register Now!</Link>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  );
}

export default Login;
