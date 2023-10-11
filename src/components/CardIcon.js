import avatar from "./avatar.png"
const CardIcon = props=>{
    return (
        <div className="card_icon">
            <img alt ="avatar" className="avatar" src = {props.props}/>
        </div>
    )
}

export default CardIcon