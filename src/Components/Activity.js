import React from 'react'
import './Activity.css'


export default function Activity({listActivities}) {


    const item = listActivities[Math.floor(Math.random() * listActivities.length)];

    return (
         
        <div className="Activity">
            <img alt="liée à l'activité" className="imageActivity"src="https://cdn-tam.ouest-france.fr/media/cache/thumb_400/recette-de-la-pate-a-modeler-tete-a-modeler.jpeg" />
            <div className="name">
                <p className="">{item.name}</p>
            </div>
        </div >
    )
}
