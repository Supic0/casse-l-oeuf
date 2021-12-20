import React, { useState, useRef } from 'react'
import './FormActivity.css'
import { Link } from 'react-router-dom'

export default function FormActivity({ listActivities, addActivityItem }) {

    const [value, setValue] = useState('');
    const [apiPopup, setApiPopup] = useState(false);
    const [img, setImg] = useState();
    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value && img) {
        const id = Math.floor(Math.random() * 10000000000);
        value != 0 && addActivityItem({ name: value, id: id, image: img });
        setValue("");
        setImg("");
        } 
    }


    const showImg = () => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setImg(reader.result)
        })
        reader.readAsDataURL(ref.current.files[0]);
        setImg();
    }



    return (
        <>

            <form onSubmit={handleSubmit} className="formActivity">
                <label className={!img && "plus"}>
                    {img && <img src={img} className="previewImg" />}

                    <input type="file"
                        ref={ref}
                        id="image" name="image"
                        onChange={showImg}
                        accept="image/png, image/jpeg"
                        style={{ display: 'none' }}></input>

                </label>
                <div className='inputField'>
                    <input className="input" type="text" maxLength="20" value={value} onChange={e => setValue(e.target.value)} />

                    <svg
                        onClick={handleSubmit}
                        xmlns="http://www.w3.org/2000/svg" width="auto" fill="#007BFF" className="envoi bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
                    </svg>
                </div>
                {(listActivities.length != 0) ?
                    <Link to="/" className="btn btn-primary"  >
                    Jouer
                    </Link>
                    :
                    <>
                    <button className="btn btn-secondary" disabled>Jouer</button>
                    <p style={{color:'lightcoral', position:'absolute', top:'105%' }}>Aucune activité ajouté</p>
                    </>
                    }
        </form>

        </>
    )
}
