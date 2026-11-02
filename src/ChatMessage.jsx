import {useState} from "react";

function ChatMessage(props){
    const message = props.message;
    const sender = props.sender;

    const [loveCount, setLoveCount] = useState(0);

    function addLike(){
        setLoveCount(loveCount+1)
    }

    return(
        <div>
            <img src="src/images.png" width="50"/>
            <div>
                {sender}
                <br></br>
                {message}
                <br></br>
                <button onClick={addLike}>Likes:{loveCount}</button>
            </div>
            
        </div>
    );
    
}

export default ChatMessage