

import "./Button.css"
export default function Button ({lable, id, onClick, className}) {

    return (
        <button id={id} onClick={onClick} className = {className}>{lable} </button>
    )

}