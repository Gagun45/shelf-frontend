import { useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_AUTH0_REDIRECT_URI;
const socket = io(SOCKET_URL);
const TestPage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([""]);

  const sendMessage = () => {
    socket.emit("send_message", { message });
    setChat((prev) => [...prev, message]);
    setMessage("");
  };
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send message</button>
      <div className="border-2 min-h-24">
        {chat.map((mes) => (
          <span key={mes} className="flex">
            {mes}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
