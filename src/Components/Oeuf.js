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
        (nbClick === nbClickMax - 1 ) && setTimeout(() => {
            setNbClick(prevNbClick => prevNbClick + 1)
        }, 3000);
    }


    return (
        <div className="Oeufapp">
            <div className="Oeufanim">

                {(nbClick <= nbClickMax) && <img src={egg42back} className={`Oeuf ${nbClick === nbClickMax && "down"}`}></img>}
                <Activity />
                {(nbClick <= nbClickMax) && <img src={egg41} className={`Oeuf ${nbClick === nbClickMax && "up"}`} ></img>}
                {(nbClick <= nbClickMax) && <img src={egg42front} className={`Oeuf ${nbClick === nbClickMax && "down"}`}></img>}

            </div>

            {(nbClick < nbClickMax) && (<img src={egg3} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < 5) && (<img src={egg2} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < 2) && (<img src={egg1} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

        </div>
    )
}
