import React, { useState, useEffect } from 'react'
import Main from './Components/Main'
import AddActivity from './Components/AddActivity';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Routes, Route } from 'react-router-dom';



export default function App() {

  const [listActivities, setListActivities] = useState([
    {
      id: 0,
      name: "Pate à modeler",
      image: "./images/pate.jpg"
    },
    {
      id: 1,
      name: "Peinture",
      image: "./images/peinture.jpg"
    },
    {
      id: 2,
      name: "Cuisiner avec Maman",
      image: "./images/cuisine.jpg"
    }
  ]);

  useEffect(() => {
    if (localStorage.getItem("activities") != null && JSON.parse(localStorage.getItem("activities")).length != 0) {
      console.log(localStorage.getItem("activities"))
      setListActivities(JSON.parse(localStorage.getItem("activities")))
    }
  }, [])


  const delItem = (item) => {
    const newList = listActivities.filter(el => el.name !== item.name);
    setListActivities(newList)
    localStorage.setItem('activities', JSON.stringify(newList));
  }

  const addActivityItem = (newItem) => {
    if (!listActivities.some(item => item.name === newItem.name)) {
      const newList = [...listActivities, newItem];
      setListActivities(newList);
      localStorage.setItem('activities', JSON.stringify(newList));
    }
  }

  return (

    <>
      <Routes>
        <Route path="/AddActivity" exact element={<AddActivity addActivityItem={addActivityItem} listActivities={listActivities} delItem={delItem} />} />
        <Route element={<Main listActivities={listActivities} />} />
      </Routes>
    </>

  )
}
