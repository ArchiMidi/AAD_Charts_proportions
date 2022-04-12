import React from 'react'
import { ReactComponent as Triangle } from "../assets/triangle.svg"

export default function YearCard(props) {
    const { name, info, index } = props

    function calculateTriangleSide(area) {
        return Math.sqrt(4 * area / 1.7320508075688772) * 10
    }

    return (
       <p>{name}</p>
    )
}
