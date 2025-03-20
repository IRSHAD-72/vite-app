import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample user data with profile images
const users = {
  John: "https://randomuser.me/api/portraits/men/1.jpg",
  Sam: "https://randomuser.me/api/portraits/men/2.jpg",
  Joyse: "https://randomuser.me/api/portraits/women/1.jpg",
  Jin: "https://randomuser.me/api/portraits/men/3.jpg",
};


const ChatBox = () => {
  // Initial Messages
  const [messages, setMessages] = useState([
    { id: 1, name: "John", text: "Hello, I'm John. How can I help you today?", time: "08:55", isSender: false },
    { id: 2, name: "Sam", text: "Hi John, I need more information about the Developer Plan.", time: "08:56", isSender: true },
    { id: 3, name: "John", text: "Are we meeting today? Project has been already finished and I have results to show you.", isSender: false, time: "08:57" },
    { id: 4, name: "Joyse", text: "Well, I am not sure. I have results to show you.", time: "08:59", isSender: true },
    { id: 5, name: "John", text: "The rest of the team is not here yet. Maybe in an hour or so?", time: "08:57", isSender: false },
    { id: 6, name: "Jin", text: "Have you faced any problems at the last phase of the project?", time: "08:59", isSender: true },
    { id: 7, name: "John", text: "Actually, everything was fine. I’m very excited to show this to our team.", time: "07:00", isSender: false },
  
  ]);

  // Input State
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState("John"); // Default sender

  // Handle Message Send
  const sendMessage = () => {
    if (newMessage.trim() === "") return; // Prevent empty messages

    const newMsg = {
      id: messages.length + 1,
      name: selectedUser, // Use selected user
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isSender: selectedUser !== "John", // If user is NOT John, they are the sender
    };

    setMessages([...messages, newMsg]); // Add new message
    setNewMessage(""); // Clear input field
  };
  

  return (
    
    <div className="container mt-4  d-flex  justify-content-center" style={{ width: "100%", height: "100vh" }}>
      <div className="chat-container border rounded p-3 bg-white" style={{ width: "50%", height: "600px" }}>
        <h5 className="fw-bold border-bottom  ">Project Communications</h5>


        {/* User Selection Dropdown */}
        {/* <div className="mb-2">
          <label className="fw-bold me-2">Send as:</label>
          <select
            className="form-select w-auto d-inline"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {Object.keys(users).map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div> 

        {/* Chat Box */}
        <div className=" p-3  bg-white" style={{ height: "500px", overflowY: "auto" }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`d-flex ${msg.isSender ? "justify-content-end" : "justify-content-start"} mb-3`}>
              {/* Receiver Side */}
              {!msg.isSender && (
                <div className="d-flex flex-column  align-items-center me-2">
                  <img src={users[msg.name]} alt={msg.name} className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                  <small className=" text-muted">{msg.name}</small>
                </div>
              )}

              {/* Message Box */}
              <div className="d-flex flex-column">
  {/* Message Box */}
  <div className="p-2 rounded bg-light border chat-text w-100 w-sm-75 w-md-50 w-lg-40 small-text">
  <p className="mb-1  small-text">{msg.text}</p>
</div>


  
  {/* Time and Checkmark outside the box */}
  <div className={`d-flex align-items-center  ${msg.isSender ? "justify-content-end" : "justify-content-start"}`}>
    <small className="text-muted">{msg.time}</small>
    <BsCheckCircle className="text-success fa fa-check-circle  ms-2" />
  </div>
</div>



              {/* Sender Side */}
              {msg.isSender && (
                <div className="d-flex flex-column align-items-center ms-2">
                  <img src={users[msg.name]} alt={msg.name} className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                  <small className=" text-muted">{msg.name}</small>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input & Send Button */}
        <div className="input-group mt-2 mb-3">
  <input
    type="text"
    className="form-control w-100 w-md-75 w-lg-50" 
    placeholder="Type your message here..."
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
  />

          {/* <button className="btn btn-primary" onClick={sendMessage}> */}
            
          {/* </button> */}
        </div>
      </div>
    </div>

    
  );
}; 
export default ChatBox;
