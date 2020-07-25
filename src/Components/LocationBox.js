import React from 'react'
import DateBuilder from '../Logic/DateBuilder'

export default function LocationBox( { country } ) {
    return (
        <div>
            <div className="header">{country}</div>
            <div className="date"> { DateBuilder( new Date() ) } </div>
        </div>
    )
}