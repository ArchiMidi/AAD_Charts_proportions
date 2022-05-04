import React from 'react'



export default function Rectangles(props) {
    const { dataArr } = props

    return (
        <div style={{
            display: 'flex',

            flexDirection: 'row',
            flexWrap: 'wrap',

            width: '100vw',

        }}>

            {dataArr.sort((a, b) => b[1].totalNumberOfExhibitions - a[1].totalNumberOfExhibitions).map((place, i) => {
                const name = place[0];

                {/* totalNumberOfExhibitions */ }
                {/* yearsValues, */ }
                {/* AADArtistsTotal */ }
                {/* yearsWithAADAmount */ }
                {/* yearsWithDataAmount */ }

                const info = place[1];
                const height = Math.sqrt(info.totalNumberOfExhibitions) * 4
                return (
                    <>

                        <div className='proportionateFrame' key={'frame' + name}
                            style={{
                                width: `${height}vw`,
                                height: `${height}vw`,
                                margin: '5vw 1vw',
                                backgroundColor: 'pink'
                            }}
                        >
                            {name} <small>{info.city}</small> <br />
                            <b>{info.AADArtistsTotal} artists</b>  over <br />
                            <b> {info.totalNumberOfExhibitions} {info.kindOfEvents}</b> in <br />
                            <b>{info.yearsWithDataAmount}</b> years
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            overflow: 'visible',
                            color: 'white',
                        }}>
                            {info.yearsValues.map((val) => {
                                const side = Math.sqrt(val) * 2
                                return (
                                    typeof val === 'number' && val > 0 &&
                                    <div style={{ width: `${side}vw`, height: `${side}vw`, backgroundColor: 'blue', margin: '0.1vw' }}>{val}</div>
                                )
                            })}
                        </div>
                        </div>
                    </>
                )
            })}

        </div>
    )

}
