import React from 'react'
import './List.css'

export default function List({listActivities, delItem}) {
    return (
        <div>
            <ul>
                {
                    listActivities.map((item) => {
                        return(
                            <div style={{display:"flex"}}>
                                <li key={item.id}>
                                    {item.name}
                                </li>
                                <div type="button" className="btn-close" aria-label="Close" onClick={() => delItem(item)}></div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
