import React from 'react'
import { ReactComponent as Triangle } from "../assets/triangle.svg"

export default function YearCard(props) {
    const { name, info, index } = props

    function calculateTriangleSide(area) {
        return Math.sqrt(4 * area / 1.7320508075688772) * 10
    }

    return (
        <div className='yearCard'
        style={{top: `${index * 3} rem`}}>
            {info.yearsValues.map((yearValue, i) => {
                if (typeof yearValue === 'number') {

                    return <div key={i + name + yearValue}>
                        {
                            <Triangle key={name + yearValue + i}
                                className='triangle'
                                style={{
                                    // position: 'absolute',
                                    width: `${calculateTriangleSide(yearValue)}`,
                                    fill: 'hsl(43, 65%, 56%)',
                                    stroke: 'black',
                                    strokeWidth: '0.08rem',
                                    strokeLinejoin: 'round',
                                    // left: `${10 * i}rem`,
                                    // top: `10rem`

                                }} />
                        }
                    </div>
                }

            })}
        </div>
    )
}
