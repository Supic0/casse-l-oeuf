import React from 'react'
import './List.css'

export default function List({ listActivities, delItem }) {
    return (
        <div className="card listActivity overflow-auto">
            <ul className="list-group">
                {
                    listActivities.map((item) => {
                        return (
                            <div className="list-group-item" style={{ display: "flex", position: "relative", width:"100%" }}>
                                <li className="" key={item.id}>
                                    {item.name}
                                </li>
                                <p type="button" className="btn-close" style={{ position: "absolute", right: "3%" }} aria-label="Close" onClick={() => delItem(item)}></p>
                            </div>
                        )
                    })
                }
            </ul>
            {!listActivities[0]&& <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_s9lvjg2e.json" background="transparent" speed="1"
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left:"50%",
                    transform:"translate(-50%)",
                    width: "80%",
                    height: "auto"
                }}
                loop autoplay>
                </lottie-player>}
        </div>
    )
}
