import React, { Fragment } from 'react'
import Activity from './Activity';
import Oeuf from './Oeuf';
import './Main.css'

export default function Main() {

    return (
        <div className="main">
            <Activity />
            <Oeuf />
        </div>
    )
}
