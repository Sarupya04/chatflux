import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatMessages from "./ChatMessages";
import { useState } from "react";
import "./App.css";

function App() {
      const [chatMessages, setChatMessages] = useState([
        { 
        message: "hello chatbot", 
        sender: "user",
        id: 'id1'
        },
        { 
        message: "Hello! How can I help you?", 
        sender: "robot",
        id: 'id2'
        },
        { 
        message: "can you get me todays date?", 
        sender: "user",
        id: 'id3'
        },
        { 
        message: "Today is October 24", 
        sender: "robot",
        id: 'id4'
        }
    ]);
    //array destructuring
    // const [chatMessages, setChatMessages] = array;
    //the current value of chatMessages (The current data)
    // const chatMessages = array[0];
    //the function to update chatMessages
    // const setChatMessages = array[1]; 

  return(
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
