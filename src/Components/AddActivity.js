import React, {useEffect} from 'react'
import './AddActivity.css'
import FormActivity from './FormActivity'
import List from './List'
import listIcon from '../icons/liste.png'
import { Link } from 'react-router-dom'
import fond from '../images/fondFerme.jpg'

export default function AddActivity({ addActivityItem, listActivities, delItem}) {


    return (
        <>
        <div className="fond" style={{ backgroundImage: `url(${fond})` }}></div>
        <div className="addActivity blur" style={{position:"relative", width:"100%", height:"100%", overflow:"hidden"}}>
            <Link to="/">
                <img src={listIcon} className="goBack" alt="go to addActivity panel"/>
            </Link>
            <FormActivity listActivities={listActivities} addActivityItem={addActivityItem}  />
            <List listActivities={listActivities} delItem={delItem}/>
            
        </div>
        </>
    )
}
