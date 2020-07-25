import React from 'react'

export default function WhiteThingy( { text , cases } ) {
    return (
        <div className="middle-container">
            <div className="headline">{text}</div>
            <div className="mid-cases"> {cases} </div>
        </div>
    )
}
