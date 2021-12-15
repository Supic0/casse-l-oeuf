import React, { useState } from 'react'
import './FormActivity.css'
import ApiPopup from './ApiPopup'
import {Link} from 'react-router-dom'

export default function FormActivity({ addActivityItem }) {

    const [value, setValue] = useState('');
    const [apiPopup, setApiPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000000000);
        value != 0 && addActivityItem({ name: value, id: id });
        setValue("");
    }

    return (
        <React.Fragment>
        <div style={{ position: "relative", width: "75%", height: "100%" }}>
            <div className="" style={{ width: "20%", position: "absolute", top: "50%", left: "60%", transform: "translate(-50%,-50%)" }}>
                <button className="plus" onClick={() => setApiPopup(true)}></button>
                <form onSubmit={handleSubmit} className="form">
                    <input className="input" type="text" value={value} onChange={e => setValue(e.target.value)} />
                    <div className="envoi"
                        onClick={handleSubmit}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="auto" height="45px" fill="#007BFF" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                    </svg>
                    </div>
                </form>
                <Link to="/">
                <button
                    className="btn btn-primary"
                    style={{ position: "relative", left: "50%", transform: "translate(-50%)", margin: "0", marginTop: '20px' }}>Jouer
                    </button>
                </Link>
            </div>
            
        </div>
        {apiPopup&& <ApiPopup setApiPopup={setApiPopup}/>}
        </React.Fragment>
    )
}
