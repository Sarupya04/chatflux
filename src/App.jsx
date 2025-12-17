import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatMessages from "./ChatMessages";
import Landing from "./Landing";
import { useState } from "react";
import "./App.css";

function App() {
      const [chatMessages, setChatMessages] = useState([]);
    //array destructuring
    // const [chatMessages, setChatMessages] = array;
    //the current value of chatMessages (The current data)
    // const chatMessages = array[0];
    //the function to update chatMessages
    // const setChatMessages = array[1]; 

  return(
    <div className="app-container">

      {chatMessages.length === 0 ? (
        <Landing />
      ) : (
        <ChatMessages chatMessages = {chatMessages} />
      )}

  
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
