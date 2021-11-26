import React, { useState } from 'react'
import Main from './Components/Main'
import AddActivity from './Components/AddActivity';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {

  const [goAddActivity, setGoAddActivity] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [listActivities, setListActivities] = useState([]);


  const delItem = (item) => {
    const newList = listActivities;
    setListActivities(listActivities.filter(el => el.name !== item.name))
  }

  const addActivityItem = (newItem) => {
    if (!listActivities.some(item => item.name === newItem.name)) {
      const newList = [...listActivities, newItem];
      setListActivities(newList);
    }
  }

  const clickToAddActivity = () => {
    setGoAddActivity(true);
  }

  const clickToEgg = () => {
    setGoAddActivity(false);
  }

  if (isConnected) {
    if (goAddActivity) {
      return <AddActivity clickToEgg={clickToEgg} addActivityItem={addActivityItem} listActivities={listActivities} delItem={delItem} />
    } else {
      return <Main clickToAddActivity={clickToAddActivity} />
    }
  } else {
    return null;
  }

}
