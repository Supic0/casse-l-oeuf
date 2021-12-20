import React, { useEffect, useState, useRef } from 'react'
import './Activity.css'
import reload from '../icons/reload.png'


export default function Activity({ setAllLoaded, listActivities, setNbClick, nbClick, nbClickMax }) {

    const [itemChosen, setItemChosen] = useState();


    const chose = () => {
        let item = listActivities[Math.floor(Math.random() * listActivities.length)];
        setItemChosen(item);
    }


    useEffect(() => {
        if (listActivities.length!=0) {
        let item = listActivities[Math.floor(Math.random() * listActivities.length)];
        setItemChosen(item);
        }

    }, [listActivities])




return (

    <div className={`Activity ${nbClick >= nbClickMax ? "popOut" : ""}`}>
        <img alt="liée à l'activité" className="imageActivity" src={itemChosen?.image} />
            <div className="activityName">{itemChosen?.name}</div>
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
