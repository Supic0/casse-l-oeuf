import React, { useState, useEffect} from 'react'
import './Oeuf.css'
import Activity from './Activity'
import egg1 from '../images/egg1.png'
import egg2 from '../images/egg2.png'
import egg3 from '../images/egg3.png'
import egg41 from '../images/egg4-1.png'
import egg42front from '../images/egg42front.png'
import egg42back from '../images/egg42back.png'
import panier from '../images/panier.png'

export default function Oeuf({listActivities, setAllLoaded, tapeOeuf, nbClick, setNbClick, nbClickMax}) {



    return (
        <div className="Oeufapp">
            <div className="Oeufanim">

                {(nbClick <= nbClickMax) && <img alt="Oeuf cassé arrière" src={egg42back} className={`Oeuf ${(nbClick >= nbClickMax) ? "down": ""}`}></img>}
                <Activity listActivities={listActivities} setNbClick={setNbClick}/>
                {(nbClick <= nbClickMax) && <img alt="Oeuf cassé Front up"src={egg41} className={`Oeuf ${(nbClick >= nbClickMax) ? "up":""}`} ></img>}
                {(nbClick <= nbClickMax) && <img alt="Oeuf cassé Front down"src={egg42front} className={`Oeuf ${(nbClick >= nbClickMax) ? "down":""}`}></img>}

            </div>

            {(nbClick < nbClickMax) && (<img alt="Oeuf cassé" src={egg3} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < 5) && (<img alt="Oeuf cassé" src={egg2} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < 2) && (<img alt="Oeuf cassé" src={egg1} className="Oeuf" onClick={tapeOeuf} onLoad={() => setAllLoaded(true)}>
            </img>)}

            {(nbClick < 10) && <img src={panier} className="panier"></img>}
            {(nbClick < 1) &&<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_RxwlFx.json" background="transparent" speed="1" id="tapIcon" loop  autoplay></lottie-player>}
        </div>
    )
}
