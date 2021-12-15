import React from 'react'
import './ApiPopup.css'

export default function ApiPopup({setApiPopup}) {

    const handleSubmit = () => {

    }

    return (
        <div className="ApiPopup">
            <div className="Recherche">
                <form onSubmit={handleSubmit}>
                    <input className="barreRecherche"></input>
                    <button type="submit">Rechercher</button>
                </form>
            </div>
            <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={() => setApiPopup(false)}></button>
            <div className="imagesList">

            </div>
        </div>
    )
}
