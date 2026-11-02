import { useState } from 'react'
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage'
import ChatMessages from './ChatMessages'
import Chatheader from './Chatheader';
import './App.css'

function App() {

  
  const [chatMessages, setChatMessages] = useState([
        {message:"Great explanation of components!", sender:'Sara'},
        {message:"Props finally make sense to me.", sender:'Omar'},
        {message:"Can we do a lab on useState next week?", sender:'Ali'},
        {message:"Thanks for the lab, this was fun!", sender:'You'},
    ])

  return ( 
    <>
    <ChatInput chatMessages={chatMessages} setChatMessages ={setChatMessages}/>
    <ChatMessages chatMessages={chatMessages} />
    </>
    );
}

export default App
