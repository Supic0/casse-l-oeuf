import React, { useState } from 'react'
import Main from './Components/Main'
import AddActivity from './Components/AddActivity';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {

  const [goAddActivity, setGoAddActivity] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  const clickToAddActivity = () => {
    setGoAddActivity(true);
  }

  const clickToEgg = () => {
    setGoAddActivity(false);
  }

  if (isConnected) {
    if (goAddActivity) {
      return <AddActivity clickToEgg={clickToEgg} />
    } else {
      return <Main clickToAddActivity={clickToAddActivity}/>
    }
  } else {
    return null;
  }

}
