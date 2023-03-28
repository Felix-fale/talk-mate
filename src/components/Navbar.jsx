import React, { useContext } from "react";

function Navbar(props) {
  // const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/9495080/pexels-photo-9495080.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>Jane</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
