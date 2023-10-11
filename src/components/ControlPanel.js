import {useContext} from "react";
import MessageContext from "../store/MessageStore";

const ControlPanel = ()=>{
    const state = useContext(MessageContext)
    return <div className="control_panel">
        <div className="buttons">
            <input type="button" onClick={
            ()=>{
                var m = {author: "JHON SMITH", messageId:"https://ya.ru", message: "Hi! i'm using our app!", avatar:"https://images.ctfassets.net/a31yf9ord487/2FqwEAMWdh6lwsUX1Yiwpx/6890134030f948fafb161794d45ae60d/default_female.jpg"}
                    state.add(m)
                }
            } value="NEW"/>
            <input type="button" value="DELETE" onClick={e=>{
                state.dropAt(0)
            }}/>
        </div>
    </div>
}

export default ControlPanel;