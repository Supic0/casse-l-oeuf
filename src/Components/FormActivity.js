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
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Ajouter l'activité</button>
        </form>

        </>
    )
}
