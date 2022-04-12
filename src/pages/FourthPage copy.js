import React from 'react'

export default function FourthPage(props) {
    const { dataArr } = props

    const maxAmountOfExhibitions = dataArr.map(el => el[1].totalNumberOfExhibitions).reduce((acc, val) => {
        return val > acc ? val : acc
    })

    const gridColumns = () => {
        return '1fr 8fr'
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
                            <p>{place[0]}</p>
                        </div>
                    )
                })}

                {dataArr.map((place, i) => {
                    return <div
                        key={place[0] + i}
                        style={{
                            width: '100%',
                            gridColumn: 2,
                            gridRow: i,
                        }}>
<p>bob</p>
                    </div>
                })}

            </div>
        </div>
    )
}
