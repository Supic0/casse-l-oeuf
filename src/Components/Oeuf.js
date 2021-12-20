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

export default function Oeuf({listActivities, setAllLoaded}) {

    const [nbClick, setNbClick] = useState(0);
    const nbClickMax = 20;

    const tapeOeuf = e => {
        setNbClick(prevNbClick => prevNbClick + 1);
        (nbClick === nbClickMax - 1) && setTimeout(() => {
            setNbClick(prevNbClick => prevNbClick + 1)
        }, 3000);
    }

    return (
        <div className="Oeufapp">
            
            {(nbClick < nbClickMax) &&
                    <div className="tapeOeuf">
                        <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_c6aifjew.json" id="arrow" background="transparent" speed="1.4" loop autoplay></lottie-player>
                        <p className='indicationOeuf'>Tape sur l'oeuf !</p>
                    </div>}
            <div className="Oeufanim">

                {(nbClick <= nbClickMax) && <img alt="Oeuf cassé arrière" src={egg42back} className={`Oeuf ${(nbClick >= nbClickMax) ? "down": ""}`}></img>}
                {(listActivities?.length!=0)&&<Activity nbClickMax={nbClickMax}setAllLoaded={setAllLoaded} listActivities={listActivities} setNbClick={setNbClick} nbClick={nbClick}/>}
                {(nbClick <= nbClickMax) && <img alt="Oeuf cassé Front up"src={egg41} className={`Oeuf ${(nbClick >= nbClickMax) ? "up":""}`} ></img>}
                {(nbClick <= nbClickMax) && <img alt="Oeuf cassé Front down"src={egg42front} className={`Oeuf ${(nbClick >= nbClickMax) ? "down":""}`}></img>}

            </div>

            {(nbClick < nbClickMax) && (<img alt="Oeuf cassé" src={egg3} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < nbClickMax*50/100) && (<img alt="Oeuf cassé" src={egg2} className="Oeuf" onClick={tapeOeuf}>
            </img>)}

            {(nbClick < nbClickMax*5/100) && (<img alt="Oeuf cassé" src={egg1} className="Oeuf" onClick={tapeOeuf} onLoad={() => setAllLoaded(true)}>
            </img>)}

            {(nbClick < nbClickMax) && <img src={panier} className="panier"></img>}

            {(nbClick < 1) &&<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_RxwlFx.json" background="transparent" speed="1" id="tapIcon" loop  autoplay></lottie-player>}
        </div>
    )
}
