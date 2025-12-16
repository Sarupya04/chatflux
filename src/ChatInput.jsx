import { useState } from "react";


function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage(){
        const newChatMessages = [
                ...chatMessages,
                {
                    message: inputText,
                    sender: 'user',
                    id: crypto.randomUUID()
                }
            ];

        setChatMessages(newChatMessages);
        setInputText("");

        const res = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: inputText })
        });

        const data = await res.json();

        setChatMessages([
            ...newChatMessages,
            {
                message: data.reply,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setInputText('');
    }

    return ( 
        <> 
            <div className="chat-input-container">
                <input 
                    placeholder="Send a message to Chatbot" 
                    size="30"
                    onChange={saveInputText}
                    //value lets us change the text inside the input
                    value={inputText}
                    className = "chat-input"
                />
                <button 
                    onClick={sendMessage}
                    className="send-button"
                >Send</button>
            </div>
        </>
    );
}

export default ChatInput;