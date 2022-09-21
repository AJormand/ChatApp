import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">MyChat</span>
      <div className="user">
        <img
          src="https://slp-statics.astockcdn.net/static_assets/staging/22spring/audio/Card5_291856738_.jpg?width=580&format=webp"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
