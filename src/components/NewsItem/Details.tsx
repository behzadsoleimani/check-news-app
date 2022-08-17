import React from "react"
import { author, channel, lastUpdate } from "../../config/config"


export const detail = {
    marginBottom: "15px"
};



export const text = {
    color: "#6c757d",
    marginBottom: "3px",
    marginTop: "4px",
    fontSize: "12px",
    opacity: 1
};
export default function Details(props: any) {

    return (
        <div style={detail}>
            <p style={text}>
                {author(props.author)}
            </p>
            <p style={text}>
                {channel(props.channel)}
            </p>
            <p style={text}>
                {props.date ? lastUpdate(props.date.split(" ")[0]): ""}
            </p>
        </div>
    )
}
