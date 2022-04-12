import React from 'react'

export default function BarGraph(props) {
    const { dataArr } = props

    const maxAmountOfExhibitions = dataArr.map(el => el[1].totalNumberOfExhibitions).reduce((acc, val) => {
        return val > acc ? val : acc
    })

    const gridColumns = () => {
        return '1.2fr 8fr'
    }
    const gridRows = () => {
        return dataArr.map((el, i) => '1fr ').join('')
    }

    return (
        <div className='fourthContainer' >
            <h3>AAD_CHART</h3>
            <div className='chartContainerPageFour' style={{ gridTemplateRows: gridRows(), gridTemplateColumns: gridColumns() }}>

                {dataArr.map((place, i) => {
                    return (
                        <div
                            key={i + place[0]}
                            style={{
                                gridColumn: 1,
                                gridRow: i,
                                width: '100%'
                            }}
                            className='placeNameFourth'
                        >
                            <p>{place[0]} - {place[1].city}</p>
                        </div>
                    )
                })}

                {dataArr.map((place, i) => {
                    const name = place[0]
                    const info = place[1]
                    return <div
                        key={'bars' + name + i}
                        style={{
                            width: '100%',
                            gridColumn: 2,
                            gridRow: i,
                        }}>
                        <div className='exhibitionsAmountBar'
                            style={{
                                width: `${100 * info.totalNumberOfExhibitions / maxAmountOfExhibitions}%`,
                                height: '50%',
                                backgroundColor: 'red'
                            }}>
                            {info.totalNumberOfExhibitions}
                        </div>

                        <div className='AADAmountBar'
                            style={{
                                width: `${100 * info.AADArtistsTotal / maxAmountOfExhibitions}%`,
                                height: '50%',
                                backgroundColor: 'green'
                            }}>

                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}
