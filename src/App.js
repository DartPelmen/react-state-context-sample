import './App.css';
import StateCard from "./components/StateCard";
import ControlPanel from "./components/ControlPanel";
import {useEffect, useState} from "react";
import MessageContext from "./store/MessageStore";
function App() {
  const [messages, setMessages] = useState(null)
  useEffect(()=>{
    var m = {author: "JHON SMITH", messageId:"https://ya.ru", message: "Hi! i'm using our app!", avatar:"https://images.ctfassets.net/a31yf9ord487/2FqwEAMWdh6lwsUX1Yiwpx/6890134030f948fafb161794d45ae60d/default_female.jpg"}
    setMessages([m,m,m,m,m])
  }, [null])
  function add(m){
    setMessages([m,...messages])
  }

  function dropAt(index){
    messages.splice(index,1)
    setMessages([...messages])
  }

  return (
    <div>
      <MessageContext.Provider value = {{add, dropAt}}>
          <ControlPanel/>
      </MessageContext.Provider>
        <MessageContext.Provider value={{messages}}>
          <div>
            <h1>IMCOME MESSAGES</h1>
            <StateCard />
          </div>
        </MessageContext.Provider>
      </div>
);
}

export default App;
