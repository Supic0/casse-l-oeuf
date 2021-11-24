import React, { useState } from 'react'
import './Oeuf.css'
import egg1 from '../images/egg1.png'
import egg2 from '../images/egg2.png'
import egg3 from '../images/egg3.png'
import egg41 from '../images/egg4-1.png'
import egg42 from '../images/egg4-2.png'

export default function Oeuf() {

    const nbClickMax = 10;
    const [nbClick, setNbClick] = useState(1);

    const tapeOeuf = e => {
        setNbClick(prevNbClick => prevNbClick + 1);
    }

    const eggProgress = () => {

        if (nbClick / nbClickMax * 100 < 25) {
            return (<img src={egg1} alt="egg" />)
        } else if (nbClick / nbClickMax * 100 < 60) {
            return(<img src={egg2} alt="egg" />)
        } else if (nbClick / nbClickMax * 100 < 75) {
            return (<img src={egg3} alt="egg" />)
        } else if (nbClick /  nbClickMax * 100 >= 100) {
                return (<React.fragment>
                    <img src={egg41} alt="egg" />
                    <img src={egg42} alt="egg" />
                </React.fragment>)
            setNbClick(0);
        }
    }

    return (
        <div className="Oeuf" onClick={tapeOeuf}>
            {eggProgress()}
        </div>

    )
}
