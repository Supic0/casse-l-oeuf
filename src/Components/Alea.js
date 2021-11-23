import React, { useState, useEffect } from 'react'
import './Alea.css'

export default function Alea() {
    const nbOccur = 40;
    const tab = ["pate a modeler", "football", "autocollants"];
    const [value, setValue] = useState("test");
    const [choosed, setChoosed] = useState("");


    useEffect(() => {
        for (let i = 1; i < nbOccur; i++) {
            const aleatoire = setTimeout(() => {
                let val = tab[Math.floor(Math.random() * tab.length)];
                setValue(val)
                console.log(100+Math.sqrt(1 - Math.pow(i-1 ,2)));
                (i == nbOccur-1) && setChoosed(val);
            }, i*i*i*i/1000);
        }
    }, [])

    return (
        <div className={`ActivityName ${choosed ? "choosed" : ""}`}>{value}</div>
    )
}
