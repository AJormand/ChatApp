import React from "react";

import React from "react";
import Add from "../images/add.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">MyChat</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Log in</button>
        </form>
        <p>Dont have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
