import React, { useState, useEffect } from 'react'
import Main from './Components/Main'
import AddActivity from './Components/AddActivity';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Connexion from './Components/Connexion';
import { Routes, Route } from 'react-router-dom';


export default function App() {

  const [listActivities, setListActivities] = useState();

  useEffect(() => {
    if (localStorage.getItem("activities") != null) {
      console.log(localStorage.getItem("activities"));
    setListActivities(JSON.parse(localStorage.getItem("activities")))
    }
  }, [])


  const delItem = (item) => {
    setListActivities(listActivities.filter(el => el.name !== item.name))
  }

  const addActivityItem = (newItem) => {
    if (!listActivities.some(item => item.name === newItem.name)) {
      const newList = [...listActivities, newItem];
      setListActivities(newList);
      localStorage.setItem('activities', JSON.stringify(newList));
    }
  }

if (listActivities!=null){
  return (

    <React.Fragment>
      <Routes>
        <Route path="/casse-l-oeuf/" exact element={<Main listActivities={listActivities} />} />
        <Route path="/casse-l-oeuf/AddActivity" exact element={<AddActivity addActivityItem={addActivityItem}  listActivities={listActivities} delItem={delItem} />} />
        <Route path="/casse-l-oeuf/Connexion" exact element={<Connexion  />} />
      </Routes>
    </React.Fragment>
 
  )
  } else {
    return(<React.Fragment></React.Fragment>)
  }
}