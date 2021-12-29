import React, { useState, useRef } from 'react'
import './FormActivity.css'
import { Link } from 'react-router-dom'

export default function FormActivity({ listActivities, addActivityItem }) {

    const [value, setValue] = useState('');
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
        const file = ref.current.files[0];
        reader.readAsDataURL(file);
      
        reader.onload = function (event) {
          const imgElement = document.createElement("img");
          imgElement.src = event.target.result;
      
          imgElement.onload = function (e) {
            const canvas = document.createElement("canvas");
            const MAX_WIDTH = 400;
      
            const scaleSize = MAX_WIDTH / e.target.width;
            canvas.width = MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;
      
            const ctx = canvas.getContext("2d");
      
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
      
            const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
      
            setImg(srcEncoded);
          };
        };
    setImg();
}


return (
    <>

        <form onSubmit={handleSubmit} className="formActivity">
            <label className={!img ? "plus":""}>
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
