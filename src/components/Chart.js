import React from 'react'
function pickColor(value) {
    if (typeof value !== 'number') return 'hsl(0, 0%, 60%)'
    if (value === 0) return `hsl(0, 20%, 80%)`
    if (value <= 1) return 'hsl(60, 40%, 80%)'
    if (value <= 3) return`hsl(60, 70%, 80%)`
    if (value <= 5) return`hsl(60, 70%, 70%)`
    if (value <= 15) return`hsl(60, 70%, 60%)`
    if (value <= 25) return`hsl(80, 100%, 50%)`
    if (value <= 50  ) return`hsl(100, 100%, 50%)`
    return `#ffffff`
}
export default function Chart(props) {
    const { data } = props;
    const dataArr = [...data]

    const gridColumns = () => {
        return dataArr[0][1].yearsValues.map((el, i) => i === 0 ? '4fr' : '3rem ').join('') + '1fr'
    }
    const gridRows = () => {
        return dataArr.map((el, i) => '3rem ').join('')
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
                            {/* {value} */}
                        </div>
                    )
                }
                )
            })}
        </div>
    )
}
