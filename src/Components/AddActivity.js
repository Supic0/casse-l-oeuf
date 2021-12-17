import React, {useEffect} from 'react'
import './AddActivity.css'
import FormActivity from './FormActivity'
import List from './List'

export default function AddActivity({ addActivityItem, listActivities, delItem}) {


    return (
        <div className="" style={{position:"relative", width:"100%", height:"100%", overflow:"hidden"}}>
            <FormActivity listActivities={listActivities} addActivityItem={addActivityItem}  />
            <List listActivities={listActivities} delItem={delItem}/>
            
        </div>
    )
}
