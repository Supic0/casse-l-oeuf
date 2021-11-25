import React, { useState, useRef } from 'react'
import './Oeuf.css'
import Activity from './Activity'
import egg1 from '../images/egg1.png'
import egg2 from '../images/egg2.png'
import egg3 from '../images/egg3.png'
import egg41 from '../images/egg4-1.png'
import egg42front from '../images/egg42front.png'
import egg42back from '../images/egg42back.png'

export default function Oeuf() {

    const nbClickMax = 10;
    const [nbClick, setNbClick] = useState(1);


    const tapeOeuf = e => {
        setNbClick(prevNbClick => prevNbClick + 1);
    }


    return (
        <div className="Oeufapp">
            <div className="Oeufanim">
                
                <img src={egg42back} className={`Oeuf ${nbClick===10&& "down"}`}></img>
                <Activity/>
                <img src={egg41} className={`Oeuf ${nbClick===10&& "up"}`} ></img>
                <img src={egg42front} className={`Oeuf ${nbClick===10&& "down"}`}></img>

            </div>

            {(nbClick < 10) && (<img src={egg3} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < 5) && (<img src={egg2} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < 2) && (<img src={egg1} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

        </div>
    )
}
