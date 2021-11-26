import React from 'react'
import './AddActivity.css'
import FormActivity from './FormActivity'
import List from './List'

export default function AddActivity({ clickToEgg, addActivityItem, listActivities, delItem }) {

    return (
        <div>
            <FormActivity addActivityItem={addActivityItem} />
            <List listActivities={listActivities} delItem={delItem}/>
            <button className="btn btn-primary" onClick={clickToEgg}>Casser l'oeuf !</button>
        </div>
    )
}
