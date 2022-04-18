import React from 'react'



export default function Rectangles(props) {
    const { dataArr } = props

    return (
        <div style={{
            display: 'flex',
            // flexDirection: 'row-reverse',
            flexDirection: 'column',
            // flexWrap: 'wrap-reverse',
            // width: '200vw',
            width: '100vw',
            height:'',
        }}>

            {dataArr.sort((a, b)=>b[1].totalNumberOfExhibitions - a[1].totalNumberOfExhibitions).map((place, i) => {
                const name = place[0];
               
            {/* totalNumberOfExhibitions: sumMixedValuesArray([line[28], line[29], line[30], line[31]]), */}
            {/* yearsValues, */}
            {/* AADArtistsTotal: sumMixedValuesArray(yearsValues), */}
            {/* yearsWithAADAmount: yearsValues.filter(val => val > 0).length, */}
            {/* yearsWithDataAmount */}
                const info = place[1];
                const height = info.totalNumberOfExhibitions / 5
                return (
                    <div className='proportionateFrame' key={'frame' + name}
                        style={{
                            // minWidth: '30vw',
                            // height: `${height}vw`,
                            margin: '1vw',
                            backgroundColor: 'pink'
                        }}
                    >
                        {name} - <b>{info.AADArtistsTotal}</b> artists over <b>{info.totalNumberOfExhibitions}</b> {info.kindOfEvents} in <b>{info.yearsWithDataAmount}</b> years
                    </div>
                )
            })}

        </div>
    )

}
