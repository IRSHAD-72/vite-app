import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCheckCircle } from "react-icons/bs";
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
  const [messages, setMessages] = useState([
    { id: 1, name: "John", text: "Hello, I'm John. How can I help you today?", time: "08:55" },
    { id: 2, name: "Sam", text: "Hi John, I need more information about the Developer Plan.", time: "08:56" },
    { id: 3, name: "John", text: "Are we meeting today? Project has been already finished and I have results to show you.", time: "08:57" },
    { id: 4, name: "Joyse", text: "Well, I am not sure. I have results to show you.", time: "08:59" },
    { id: 5, name: "John", text: "The rest of the team is not here yet. Maybe in an hour or so?", time: "08:57" },
    { id: 6, name: "Jin", text: "Have you faced any problems at the last phase of the project?", time: "08:59" },
    { id: 7, name: "John", text: "Actually, everything was fine. I’m very excited to show this to our team.", time: "07:00" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      name: "Sam", // Hardcoded sender for now
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <h5 className="text-left border-bottom pb-2">Project Communications</h5>
      <ul className="chat-box chatContainerScroll">
        {messages.map((msg) => (
          <li key={msg.id} className={`chat-message chat-text d-flex mb-3 ${msg.name === "John" ? "chat-left" : "chat-right"}`}>
            {msg.name === "John" && (
              <div className="chat-avatar">
                <img src={users[msg.name]} alt={msg.name} className="chat-avatar" />
                <div className="chat-name">{msg.name}</div>
              </div>
            )}

            <div className={`chat-text ${msg.name === "John" ? "chat-text" : "chat-text-right"}`}>
              <p className="chat-text">{msg.text}</p>
              
            </div>
<div>
<li className="chat-left">
              <span className="chat-hour">
                {msg.time} <BsCheckCircle className="text-success ms-1" />
              </span>
              </li>
</div>
            {msg.name !== "John" && (
              <div className="chat-avatar">
                <img src={users[msg.name]} alt={msg.name} className="chat-avatar" />
                <div className="chat-name">{msg.name}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
        ></textarea>
      </div>
    </div>
  );
};

export default ChatBox;
