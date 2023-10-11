import CardIcon from "./CardIcon";
import {useState} from "react";

const Card =props=>{
    const [isClicked, clickToCard] = useState(false)
    const stl = isClicked ? {backgroundColor: '#ff0000'} : {backgroundColor: '#57f072'}
    return(<div className="message_card" onClick={e=>{clickToCard(!isClicked)}}>
        <CardIcon props={props.props.avatar}/>
        <div className="card_content" style={stl}>
            <h1>{props.props.author}</h1>
            <h3>{props.props.message}</h3>
        </div>
    </div>)
}
export default Card;