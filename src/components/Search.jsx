import React from "react";

function Search(props) {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          // onKeyDown={handleKey}
          // onChange={(e) => setUsername(e.target.value)}
          // value={username}
        />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/14172204/pexels-photo-14172204.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Tyler</span>
        </div>
      </div>
      {/* {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Search;
