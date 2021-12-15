import React, {useEffect, useState} from 'react'
import './Activity.css'
import reload from '../icons/reload.png'


export default function Activity({listActivities, setNbClick}) {

    const [itemChosen, setItemChosen] = useState({});

    const chose = () => {
        if(listActivities[0]!=null){
            setItemChosen(listActivities[Math.floor(Math.random() * listActivities.length)]);
            }
            else {
            setItemChosen({id:0,name:"No Activity"});
            }
    }


    useEffect(() => {
        if(listActivities[0]!=null){
            setItemChosen(listActivities[Math.floor(Math.random() * listActivities.length)]);
            }
            else {
            setItemChosen({id:0,name:"No Activity"});
            }
    }, [])


    return (
         
        <div className="Activity">
            <img alt="liée à l'activité" className="imageActivity"src="https://cdn-tam.ouest-france.fr/media/cache/thumb_400/recette-de-la-pate-a-modeler-tete-a-modeler.jpeg" />
            <div className="name">
                <p className="">{itemChosen.name}</p>
            </div>
            <img src={reload} className="reload" 
            onClick={() => {
                setNbClick(0);
                chose();
            }
                }></img>

        </div >
    )
}
