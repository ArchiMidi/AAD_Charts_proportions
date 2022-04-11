import React from 'react'
import { ReactComponent as Triangle } from "../assets/triangle.svg"

export default function YearCard(props) {
    const { value } = props

    function calculateTriangleSide(area) {
        return 0.001 * Math.sqrt(4 * area / 1.7320508075688772)
      }

    return (
        <div className='yearCard'>
        <Triangle
        className='triangle'
        style={{
         overflow: 'visible',
          position: 'relative',
          width: `${calculateTriangleSide(value)}`,
          fill: 'hsl(43, 65%, 56%)',
          stroke: 'white',
          strokeWidth: '0.08rem',
          strokeLinejoin: 'round',
        //   bottom: 0,
        //   left: 0,
          // not doing anything
        //   top: `${index % 1}rem`,
        //   left: `${index*1.4}rem`
        }} />
        </div>
    )
}
