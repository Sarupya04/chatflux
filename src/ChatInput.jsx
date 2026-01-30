import { useState } from "react";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  function saveInputText(e) {
    setInputText(e.target.value);
  }

  async function sendMessage() {
    if (!inputText.trim() || loading) return;

    setLoading(true);

    const userMessage = {
      role: "user",
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };

    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setInputText("");

    try {
      // Convert messages into LLM format
      const conversation = updatedMessages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.message,
      }));

      const res = await fetch("https://chatflux-bapt.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation }),
      });

      const data = await res.json();

      setChatMessages([
        ...updatedMessages,
        {
          message: data.reply,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }

    catch (err) {

      console.log("Error sending message:", err);

      setChatMessages([
        ...updatedMessages,
        {
          message: "Error talking to AI",
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    } 
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        value={inputText}
        onChange={saveInputText}
        className="chat-input"
        disabled={loading}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
      />

      <button
        onClick={sendMessage}
        className="send-button"
        disabled={loading}
      >
        {loading ? "Typing..." : "Send"}
      </button>
    </div>
  );
}

export default ChatInput;
