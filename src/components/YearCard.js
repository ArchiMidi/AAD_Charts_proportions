import React from 'react'
import { ReactComponent as Triangle } from "../assets/triangle.svg"

export default function YearCard(props) {
    const { name, info, index } = props

    function calculateTriangleSide(area) {
        return Math.sqrt(4 * area / 1.7320508075688772) * 10
    }

    return (
        <div className='yearCard'
            style={{ position: 'absolute', top: `${index * 30} rem`, height:'10rem', width: '30rem'}}>
            {info.yearsValues.map((yearValue, i) => {
                return <div key={i + name + yearValue}>
                    {typeof yearValue === 'number' &&
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

            )}
        </div>
    )
}
