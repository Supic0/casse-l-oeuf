import React, { useEffect, useState, useRef } from 'react'
import './Activity.css'
import reload from '../icons/reload.png'


export default function Activity({ setAllLoaded, listActivities, setNbClick, nbClick }) {

    const [itemChosen, setItemChosen] = useState();
    const ref = useRef()
    const ref2 = useRef()

    const chose = () => {
        let item = listActivities[Math.floor(Math.random() * listActivities.length)];
        setItemChosen(item);
    }


    useEffect(() => {
        let item = listActivities[Math.floor(Math.random() * listActivities.length)];
        setItemChosen(item);
    }, [])




return (

    <div className={`Activity ${nbClick >= 10 ? "popOut" : ""}`}>
        <img alt="liée à l'activité" className="imageActivity" src="https://cdn-tam.ouest-france.fr/media/cache/thumb_400/recette-de-la-pate-a-modeler-tete-a-modeler.jpeg" />
            <div className="activityName">{itemChosen&&itemChosen.name}</div>
        <img src={reload} className="reload" href="/casse-l-oeuf/"
            onClick={() => {
                setAllLoaded(false);
                setTimeout(()=>{setNbClick(0);
                    chose();},500);
            }
            }></img>

    </div >
)
}
