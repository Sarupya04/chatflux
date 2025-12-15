import user from "./assets/user.png";
import robot from "./assets/robot.png";

function ChatMessage({ message, sender }) {
    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props;
    
    // if(sender === "robot"){
    //     return (
    //         <div className="chat-message-user">
    //             <img src={robot} width={50} />
    //             {message}
    //         </div>
    //     );
    // }
    // return (
    //     <div className="chat-message-robot">
    //         {message}
    //         <img src={user} width={50} />
    //     </div>
    // );

    return(
        <div className={
            sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-robot'
        }>
            {sender === 'robot' && (
                <img src={robot} className="chat-message-profile" />
            )}

            <div className="chat-message-text">{message}</div>
            
            {sender === 'user' && (
                <img src={user} className="chat-message-profile" />
            )}
        </div>
    );
}

export default ChatMessage;