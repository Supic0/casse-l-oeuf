import React, { useState, useRef } from 'react'
import './Carrot.css'
/*https://github.com/Harjotb/TechLifeJo-Draggable-Element/blob/master/src/Components/Dialog.js*/

export default function Carrot() {
    
    const [state, setState] = useState({diffX:0, diffY:0, dragging:false, styles: {}})

    const start = (e) => {
        setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        })
    }

    const move = e => {
        if(state.dragging) {
            var left = e.screenX - state.diffX;
            var top = e.screenY - state.diffY;
    
            setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }

    const stopDrag = e => {
        setState({
            dragging: false
        });
    }
    
    return (
        <div className="draggable" style={state.styles} onMouseDown={start} onMouseMove={move} onMouseUp={stopDrag}>
        carrot
        </div>
        )
    }
    