import React from 'react'
import { ReactComponent as Triangle } from "../assets/triangle.svg"

export default function YearCard(props) {
    const { value } = props
    for (let i = 0; i <= value; i++) {

    }

    return (
        <div className='yearCard'>
        {value}
        </div>
    )
}
