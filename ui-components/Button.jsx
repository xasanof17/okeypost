import React from 'react'

const Button = ({ y, x, text, size, lineheight, }) => {
    return (
        <button className={`${y} ${x} inline-block shadow-green rounded-lg bg-green text-white font-bold ${size} ${lineheight} `}>
            {text}
        </button>
    )
}

export default Button
