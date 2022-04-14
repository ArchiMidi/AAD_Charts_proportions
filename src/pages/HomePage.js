import React from 'react'
import A4Container from '../components/A4Container'
import PlaceNameBox from '../components/PlaceNameBox'
import { ReactComponent as Triangle } from '../assets/triangle.svg'


export default function HomePage(props) {
    const { dataArr } = props

    const gridColumns = () => {
        return '2fr 8fr'
    }
    const gridRows = () => {
        return "1fr" + dataArr.map((el, i) => '1fr ').join('')
    }

    function calculateTriangleSide(area) {
        return Math.sqrt(4 * area / 1.7320508075688772) * 10
    }

    return (
        <A4Container
            dataArr={dataArr}
            gridColumns={'2fr 8fr'}
            gridRows={"1fr" + dataArr.map((el, i) => '1fr ').join('')} >

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
                                return (
                                    <Triangle
                                        key={name + val + i}
                                        width={(val !== 0 ? calculateTriangleSide(10) : 10)}
                                        style={{
                                            position: 'absolute',
                                            left: `${i * 3}rem`,
                                            borderLeft: '1px solid pink',
                                            bottom: (val !== 0 ? "0rem" : -10),
                                            stroke: 'white',
                                            strokeWidth: '0.08rem',
                                            strokeLinejoin: 'round',
                                            fill: val === 0 && "red",
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
