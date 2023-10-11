import {useContext, useEffect, useState} from "react";
import Card from "./Card";
import MessageContext from "../store/MessageStore";

export default function StateCard() {
    const messages = useContext(MessageContext)

    if(messages.messages != null){
        return(<div>
            {messages.messages.map(m=><Card props={m}/>)}
        </div>)
    }
}