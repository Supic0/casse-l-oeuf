import React, { useState } from 'react'
import './List.css'


export default function List({ listActivities, delItem }) {
const [show, setShow] = useState(false);

    return (<>
    <div className={`showHide ${show?"turn":""}`} onClick={() => setShow(!show)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                    <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                </svg>
            </div>
        <div className={`listActivity ${show?"show":""}`}>
            

            <ul className="allItems">
                {
                    listActivities.map((item) => {
                        return (
                            <div className="list-group-item" style={{ display: "flex", position: "relative", width: "100%" }}>
                                <li className="" key={item.id}>
                                    {item.name}
                                </li>
                                <p type="button" className="btn-close" style={{ position: "absolute", right: "3%" }} aria-label="Close" onClick={() => delItem(item)}></p>
                            </div>
                        )
                    })
                }
            </ul>
            {!listActivities[0] && <div style={{
                    position: "absolute",
                    bottom: "10px",
                    width: "80%",
                }} ><lottie-player src="https://assets1.lottiefiles.com/packages/lf20_s9lvjg2e.json" background="transparent" speed="1"
                
                loop autoplay>
            </lottie-player></div>}
        </div>
        </>
    )
}
