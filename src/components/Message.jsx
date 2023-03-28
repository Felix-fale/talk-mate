import React from "react";

function Message(props) {
  return (
    <div
      // className={`message ${message.senderId === currentUser.uid && "owner"}`}
      className="message owner"
    >
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/9495080/pexels-photo-9495080.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          eius!
        </p>
        {/* {message.img && <img src={message.img} alt="" />} */}
        <img
          src="https://images.pexels.com/photos/9953186/pexels-photo-9953186.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
