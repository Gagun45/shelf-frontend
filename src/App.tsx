import { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  const [url, setUrl] = useState("");

  const onFetch = async () => {
    const res = await fetch(`${url}`);
    const { msg } = await res.json();
    if (!res.ok) {
      setMsg("Failed");
      return;
    }
    setMsg(msg);
  };

  return (
    <div>
      <div>Message: {msg}</div>
      <button onClick={onFetch}>Fetch message from:</button>{" "}
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
    </div>
  );
}

export default App;
