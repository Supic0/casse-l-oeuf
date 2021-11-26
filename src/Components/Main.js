import React from 'react'
import Oeuf from './Oeuf';

import './Main.css';


export default function Main({clickToAddActivity}) {

    return (
        <div className="main">
                <button className="btn btn-primary" onClick={clickToAddActivity}> + </button>
                <Oeuf />
        </div>
    )
}
