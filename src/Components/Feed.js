import React from 'react'
import './Feed.css'

export default function Feed(props) {
    return (
        <div className="Test" onClick={props.onFeed}>
            Click on me
        </div>
    )
}
