import React from 'react'
import A4Container from '../components/A4Container'
import PlaceNameBox from '../components/PlaceNameBox'
import { ReactComponent as Triangle } from '../assets/triangle.svg'


export default function HomePage(props) {
    const { dataArr } = props

    const gridColumns = () => {
        return '3fr 8fr'
    }
    const gridRows = () => {
        return "1fr" + dataArr.map((el, i) => '1fr ').join('')
    }

    function calculateTriangleSide(val) {
        return Math.sqrt(val / 1.7320508075688772)
    }

    return (
        <A4Container
            gridColumns={gridColumns()}
            gridRows={gridRows()} >

            <p style={{
                gridColumn: 2,
                gridRow: 1,
                width: '100%'
            }}>
                HEAD
            </p>

            {dataArr.map((place, i) => {
                return (
                    <PlaceNameBox place={place} i={i} key={place + 'namebox'} />
                )
            })}

            {dataArr.map((el, i) => {
                const name = el[0];
                const info = el[1];

                return (
                    <div
                        className='chartBox' style={{
                            // position:'absolute',
                            gridColumn: 2,
                            gridRow: i + 2,
                            width: '100%',

                        }}
                        key={i + 'chart'}
                    >
                        <div className='chartLine' />


                        {info.yearsValues.map((val, i) => {
                            const isNumeric = typeof val === 'number'
                            const area = 500 * val;
                            const side = !isNumeric || val === 0 ? 10 : calculateTriangleSide(area)
                            const height = side * 1.7320508075688772 / 2
                            return (

                                <Triangle
                                    key={name + val + i}
                                    width={side + 'px'}
                                    style={{
                                        position: 'absolute',
                                        left: `${-20 + (i * 6.35)}vh`,
                                        borderLeft: isNumeric && val > 0 && '1px solid pink',
                                        top: `calc(50% - ${val !== 0 && isNumeric ?  height : -1}px - 0.14rem)`,
                                        stroke: isNumeric && 'white',
                                        strokeWidth: '0.1rem',
                                        strokeLinejoin: 'round',
                                        fill: val === 0 ? "red" : isNumeric ? 'black' : '#00000000',
                                        transform: val === 0 && 'scaleY(-1)'

                                    }} />
                            )
                        })}

                    </div>
                )
            })}

        </A4Container>
    )

}
