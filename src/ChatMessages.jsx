import ChatMessage from './ChatMessage'

function ChatMessages(props){
    const chatMessages = props.chatMessages;

    const chatMessagesComonents = chatMessages.map(chatMessages =>{
        return <ChatMessage message={chatMessages.message} sender={chatMessages.sender}/>
    })

    return(
        <>
            {chatMessagesComonents}
        </>
    )
}

export default ChatMessages