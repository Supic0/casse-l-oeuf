import React, { useState, useEffect } from 'react'
import Oeuf from './Oeuf';
import { Link } from 'react-router-dom'
import fondFerme from '../images/fondFerme.jpg'
import listIcon from '../icons/liste.png'

import './Main.css';

export default function Main({ listActivities }) {

    const [allLoaded, setAllLoaded] = useState(false);
    const [style, setStyle] = useState({});


    useEffect(() => {
        if (allLoaded === true) {
            setTimeout(function () {
                setStyle({ display: 'none' });
            }, 2000);
        } else {
            setStyle({ display: 'block' });
        }
    }, [allLoaded]);

    return (
        <div className="main" style={{ backgroundImage: `url(${fondFerme})` }}>
            <div className="loadZone"
                style={style}>
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_f3qi4ym6.json" background="transparent" speed="1" className="loadChiken" loop autoplay></lottie-player>
            </div>
            <Link to="/AddActivity">
                <img src={listIcon} className="goToAdd" alt="go to addActivity panel"/>
            </Link>
            <Oeuf listActivities={listActivities} setAllLoaded={setAllLoaded}/>
        </div>
    )
} 
