import React, {useState, useEffect} from 'react'
import Oeuf from './Oeuf';
import { Link } from 'react-router-dom'
import fondFerme from '../images/fondFerme.jpg'

import './Main.css';

export default function Main({ listActivities }) {

    const [allLoaded, setAllLoaded] = useState(false);
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (allLoaded == true) {
            setTimeout(function () {
                setStyle({ display: 'none' });
            }, 2000);
        }
    }, [allLoaded]);

    return (
        <div className="main" style={{ backgroundImage: `url(${fondFerme})` }}>
            <div className="loadZone"
                style={style}>
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_f3qi4ym6.json" background="transparent" speed="1" className="loadChiken" loop autoplay></lottie-player>
            </div>
            <Link to="/AddActivity">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="RGBA(0,123,255,0.5)" className="goToAdd bi bi-clipboard-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
            </Link>
            <Oeuf listActivities={listActivities} setAllLoaded={setAllLoaded} />
        </div>
    )
}
