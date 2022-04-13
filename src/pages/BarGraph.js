import React from 'react'

export default function BarGraph(props) {
    const { dataArr } = props

    const maxAmountOfExhibitions = dataArr.map(el => el[1].totalNumberOfExhibitions).reduce((acc, val) => {
        return val > acc ? val : acc
    })

    const gridColumns = () => {
        return '3fr 8fr'
    }
    const gridRows = () => {
        return dataArr.map((el, i) => '1fr ').join('')
    }

    return (
        <div className='BarsPageContainer' >
            <h3>AAD_CHART</h3>
            <div className='BarChartContainer' style={{ gridTemplateRows: gridRows(), gridTemplateColumns: gridColumns() }}>

                {dataArr.map((place, i) => {
                    return (
                        <div
                            key={i + place[0]}
                            style={{
                                gridColumn: 1,
                                gridRow: i,
                                width: '100%'
                            }}
                            className='BarChartPlaceName'
                        >
                            {place[0]}
                            <p>
                                {place[1].city}
                            </p>
                        </div>
                    )
                })}

                {dataArr.map((place, i) => {
                    const name = place[0]
                    const info = place[1]
                    return (
                        <div
                            className='barsContainer'
                            key={'bars' + name + i}
                            style={{
                                width: '100%',
                                gridColumn: 2,
                                gridRow: i,
                            }}>

                            <div
                                className='exhibitionsAmountBar'
                                style={{
                                    width: `${100 * info.totalNumberOfExhibitions / maxAmountOfExhibitions}%`,
                                    height: '30%',
                                    backgroundColor: 'hsl(200, 40%, 80%)'
                                }}>
                                {info.totalNumberOfExhibitions}
                            </div>

                            <div
                                className='AADAmountBar'
                                style={{
                                    width: `${100 * info.AADArtistsTotal / maxAmountOfExhibitions}%`,
                                    height: '30%',
                                    backgroundColor: `hsl(50, 60%, 80%)`
                                }}>

                            </div>

                            <div
                                className='AADRatioBar'
                                style={{
                                    width: `${100 * (100 * info.AADArtistsTotal / info.totalNumberOfExhibitions) / maxAmountOfExhibitions}%`,
                                    height: '30%',
                                    backgroundColor: `hsl(90, 60%, 50%)`
                                }}>

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
