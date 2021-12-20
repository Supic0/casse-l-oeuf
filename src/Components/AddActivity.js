import React, {useEffect} from 'react'
import './AddActivity.css'
import FormActivity from './FormActivity'
import List from './List'
import listIcon from '../icons/liste.png'
import { Link } from 'react-router-dom'

export default function AddActivity({ addActivityItem, listActivities, delItem}) {


    return (
        <div className="addActivity" style={{position:"relative", width:"100%", height:"100%", overflow:"hidden"}}>
            <Link to="/AddActivity">
                <img src={listIcon} className="goBack" alt="go to addActivity panel"/>
            </Link>
            <FormActivity listActivities={listActivities} addActivityItem={addActivityItem}  />
            <List listActivities={listActivities} delItem={delItem}/>
            
        </div>
    )
}
