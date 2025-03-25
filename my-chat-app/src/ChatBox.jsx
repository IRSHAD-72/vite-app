import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "./style.css";

// Sample user data with profile images
const users = {
  John: "https://randomuser.me/api/portraits/men/1.jpg",
  Sam: "https://randomuser.me/api/portraits/men/2.jpg",
  Joyse: "https://randomuser.me/api/portraits/women/1.jpg",
  Jin: "https://randomuser.me/api/portraits/men/3.jpg",
};

const ChatBox = () => {
  const [newMessage, setNewMessage] = useState(""); // State for the new message
  const [messages, setMessages] = useState([ // State for storing messages
    {
      user: "John",
      text: "Hello, I'm John. \n How can I help you today?",
      time: "08:55",
      avatar: users["John"],
    },
    {
      user: "Sam",
      text: "Hi, John! \n I need more information about the Developer Plan.",
      time: "08:56",
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      user: "John",
      text: "Are we meeting today?,\n Project has been already finished and I have results to show you.",
      time: "08:57",
      avatar: users["John"],
    },
    {
      user: "Joyse",
      text: "Well I am not sure. \n I have results to show you.",
      time: "08:59",
      avatar:"https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      user: "John",
      text: "The rest of the team is not here yet. maybe in an hour or so?",
      time: "09:00",
      avatar: users["John"],
    },
    {
      user: "Jin",
      text:"Have you faced any issues at the last phase of the project?",
      time: "09:01",
      avatar:"https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      user: "John",
      text: "Actually everything was fine. \n I'm very excited to show this to our team.",
      time: "09:00",
      avatar: users["John"],
    },
  ]);

  const [currentUser, setCurrentUser] = useState("John"); // Track the current user

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        user: currentUser, // Use the selected user for the message
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), // Get current time
        avatar: users[currentUser], // Avatar of the sender
      };

      // Update the messages state to include the new message
      setMessages([...messages, newMsg]);

      // Clear the message input field after sending
      setNewMessage("");
    }
  };

  // Function to render the message text with line breaks
  const formatMessageText = (text) => {
    return text.split("\n").map((str, index) => (
      <span key={index}>
        {str}
        {index < text.split("\n").length - 1 && <br />} {/* Insert <br /> between lines */}
      </span>
    ));
  };

  return (
    <div className="chat-container">
      <h5 className="text-left border-bottom pb-2">Project Communications</h5>

      {/* User Toggle Button */}
      <div className="user-toggle">
        <button
          className="btn btn-primary"
          onClick={() => setCurrentUser(currentUser === "John" ? "Sam" : "John")}
        >
          Switch to {currentUser === "John" ? "Sam" : "John"}
          
        </button>
      </div>

      <ul className="chat-box chatContainerScroll">
        {messages.map((msg, index) => (
          <li key={index} className={msg.user === "John" ? "chat-left" : "chat-right"}>
            {/* If the message is from John, display it on the left side */}
            {msg.user === "John" ? (
              <>
                <div className="chat-avatar">
                  <img src={msg.avatar} alt={`${msg.user}'s Avatar`} className="avatar avatar-sm" />
                  <div className="chat-name">{msg.user}</div>
                </div>
                <div className="chat-text">
                  {formatMessageText(msg.text)} {/* Format text with line breaks */}
                </div>
                <div className="chat-hour">
                  {msg.time}
                  <span className="fa fa-check-circle px-1" aria-hidden="true"></span>
                </div>
              </>
            ) : (
              <>
                {/* If the message is from another user, display it on the right side */}
                <div className="chat-hour">
                  {msg.time} <span className="fa fa-check-circle px-1" aria-hidden="true"></span>
                </div>
                <div className="chat-text">
                  {formatMessageText(msg.text)} {/* Format text with line breaks */}
                </div>
                <div className="chat-avatar">
                  <img src={msg.avatar} alt={`${msg.user}'s Avatar`} className="avatar avatar-sm" />
                  <div className="chat-name">{msg.user}</div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Message input */}
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}  // Update new message state on typing
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}  // Send message on Enter key
        ></textarea>
      </div>
    </div>
  );
};

export default ChatBox;
