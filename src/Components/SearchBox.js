import React from 'react'

export default function SearchBox( { val , change , keyPress } ) {
    return (
        <div className="search-box">
            <input 
            className="search-bar"
            type = "text"
            placeholder="Search. . ."
            value={val}
            onChange={change}
            onKeyPress={keyPress}
            />
        </div>
    )
}
