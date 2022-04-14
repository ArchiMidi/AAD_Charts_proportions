import React from 'react'
import A4Container from '../components/A4Container'
import PlaceNameBox from '../components/PlaceNameBox'
export default function HomePage(props) {
    const { dataArr } = props

    const gridColumns = () => {
        return '2fr 8fr'
    }
    const gridRows = () => {
        return "1fr" + dataArr.map((el, i) => '1fr ').join('')
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
                            gridColumn: 2,
                            gridRow: i + 2,
                            width: '100%',
                        }}
                        key={i + 'chart'}
                    >
                    <div className='chartLine'/>
                        {info.yearsValues}
                    </div>
                )
            })}

        </A4Container>
    )

}
