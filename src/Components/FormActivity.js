import React, { useState } from 'react'
import './FormActivity.css'

export default function FormActivity({addActivityItem}) {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000000000);
        addActivityItem({name:value,id:id});
        setValue("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e=> setValue(e.target.value)}/>
            </form>
        </div>
    )
}
