import { useState } from "react";
import Chatheader from "./Chatheader";

function ChatInput(props){
    const [comCount, setcommentCount] = useState(4);

    const chatMessages = props.chatMessages;
    const setChatMessages = props.setChatMessages;

    const [input, setInput]=useState("");

    function saveInputText(event){
        setInput(event.target.value);
    }

    function addMessage(){
        setChatMessages([...chatMessages, {message:input, sender:"you"}])
        setcommentCount(comCount+1)
    }

    return(
        <>
        <Chatheader comCount={comCount}/>
        <input placeholder="Write a comement..." size="30" onChange={saveInputText}/>
        <button onClick={addMessage}>Post</button>
        <h6></h6>
        </>
    )

}

export default ChatInput