import React, { useState, useEffect } from 'react'
import Main from './Components/Main'
import AddActivity from './Components/AddActivity';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Connexion from './Components/Connexion';
import { Routes, Route } from 'react-router-dom';


export default function App() {

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


  return (
    <React.Fragment>
      <Routes>
        <Route path="/" exact element={<Main listActivities={listActivities} />} />
        <Route path="/AddActivity" exact element={<AddActivity addActivityItem={addActivityItem}  listActivities={listActivities} delItem={delItem} />} />
        <Route path="/Connexion" exact element={<Connexion  />} />
      </Routes>
    </React.Fragment>
  )

}
