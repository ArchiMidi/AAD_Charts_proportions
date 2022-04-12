import React from 'react'

function pickColor(value) {
    //
    if (typeof value !== 'number') return 'hsla(0, 0%, 80%, 0)'
    // if (true) return 'hsla(0, 0%, 80%, 1)'
    if (value === 0) return `hsl(0, 50%, 80%)`
    if (value <= 1) return 'hsl(200, 10%, 60%)'
    if (value <= 3) return `hsl(200, 30%, 60%)`
    if (value <= 5) return `hsl(200, 50%, 50%)`
    if (value <= 15) return `hsl(200, 60%, 50%)`
    if (value <= 25) return `hsl(200, 80%, 50%)`
    if (value <= 50) return `hsl(200, 100%, 50%)`
    return `#ffffff`
}
export default function Chart(props) {
    const { data } = props;
    const dataArr = [...data].sort((a, b) => b[1].AADArtistsTotal / b[1].totalNumberOfExhibitions - a[1].AADArtistsTotal / a[1].totalNumberOfExhibitions)

    const gridColumns = () => {
        return 'min-content ' + dataArr[0][1].yearsValues.map((el, i) => '5rem ').join('')
    }
    const gridRows = () => {
        return dataArr.map((el, i) => '5rem ').join('')
    }

    const cityColor = city => {
        if (city === 'Milano') return 'hsl(30, 50%, 80%)'
        if (city === 'Roma') return 'hsl(80, 50%, 80%)'
        if (city === 'Torino') return 'hsl(130, 50%, 80%)'
        if (city === 'Firenze') return 'hsl(180, 50%, 80%)'
        if (city === 'Napoli') return 'hsl(210, 50%, 80%)'
    }

    return (
        <div className='chartContainer' style={{ gridTemplateRows: gridRows(), gridTemplateColumns: gridColumns() }}>
            {dataArr.map((place, i) => {
                return (
                    <div
                        key={i + place[0]}
                        style={{
                            gridColumn: 1,
                            gridRow: i,
                            backgroundColor: cityColor(place[1].city)
                        }}
                        className='placeName'
                    >
                        {place[0]}
                    </div>
                )
            })}

            {dataArr.map((place, i) => {
                const yearsValues = place[1].yearsValues;
                return yearsValues.map((value, j) => {
                    return (
                        <div
                            key={`${i}${j}${value}`}
                            style={{
                                backgroundColor: pickColor(value),
                                gridColumn: (2 + j),
                                gridRow: i,

                            }}
                            className='placeArea'
                        >
                            {value}
                        </div>
                    )
                }
                )
            })}
        </div>
    )
}
