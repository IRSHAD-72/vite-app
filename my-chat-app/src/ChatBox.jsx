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
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="chat-container">
      <h5 className="text-left border-bottom pb-2">Project Communications</h5>
      <ul className="chat-box chatContainerScroll">
      <li className="chat-left">
        <div className="chat-avatar">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John's Avatar" className="avatar avatar-sm" />
          <div className="chat-name">John</div>
        </div>
        <div className="chat-text">
          Hello, I'm John.
          <br />
          How can I help you today?
        </div>
        <div className="chat-hour">
          08:55 <span className="fa fa-check-circle px-1" aria-hidden="true"></span>
        </div>
      </li>
      
      <li class="chat-right">
  <div class="chat-hour">08:56 <span class="fa fa-check-circle px-1" aria-hidden="true"></span></div>
  <div class="chat-text">Hi, John<br /> I need more information about Developer Plan.</div>
  <div class="chat-avatar">
    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
    <div class="chat-name">Sam</div>
  </div>
</li>
<li className="chat-left">
        <div className="chat-avatar">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John's Avatar" className="avatar avatar-sm" />
          <div className="chat-name">John</div>
        </div>
        <div className="chat-text">
        Are we meeting today?
          <br />
          Project has been already finished and I have results to show you.                      
        </div>
        <div className="chat-hour">
          08:57 <span className="fa fa-check-circle px-1" aria-hidden="true"></span>
        </div>
      </li> 
      <li class="chat-right">
  <div class="chat-hour">08:59 <span class="fa fa-check-circle px-1" aria-hidden="true"></span></div>
  <div class="chat-text">Well I am not sure.
  <br />I have results to show you.</div>
  <div class="chat-avatar">
    <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Retail Admin" />
    <div class="chat-name">Joyse</div>
  </div>
</li>
<li className="chat-left">
        <div className="chat-avatar">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John's Avatar" className="avatar avatar-sm" />
          <div className="chat-name">John</div>
        </div>
        <div className="chat-text">
        The rest of the team is not here yet.
        <br />Maybe in an hour or so?
        </div>
        <div className="chat-hour">
          08:57 <span className="fa fa-check-circle px-1" aria-hidden="true"></span>
        </div>
      </li> 
      <li class="chat-right">
  <div class="chat-hour">08:59 <span class="fa fa-check-circle px-1" aria-hidden="true"></span></div>
  <div class="chat-text">Have you faced any problems at the last phase of the project?</div>
  <div class="chat-avatar">
    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Retail Admin" />
    <div class="chat-name">Jin</div>
  </div>
</li>
<li className="chat-left">
        <div className="chat-avatar">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John's Avatar" className="avatar avatar-sm" />
          <div className="chat-name">John</div>
        </div>
        <div className="chat-text">
        Actually everything was fine.
        <br />I'm very excited to show this to our team.
        </div>
        <div className="chat-hour">
          07:00 <span className="fa fa-check-circle px-1" aria-hidden="true"></span>
        </div>
      </li> 
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
