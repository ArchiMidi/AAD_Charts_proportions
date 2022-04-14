import React from 'react'

export default function A4Container(props) {
    const { dataArr } = props;


    const maxAmountOfExhibitions = dataArr.map(el => el[1].totalNumberOfExhibitions).reduce((acc, val) => {
        return val > acc ? val : acc
    })

    const gridColumns = () => {
        return '3fr 8fr'
    }
    const gridRows = () => {
        return dataArr.map((el, i) => '1fr ').join('')
    }



    return (<div className='PageContainer'>
        <h3>AAD_CHART</h3>
        <div className='ChartContainer' style={{ gridTemplateRows: gridRows(), gridTemplateColumns: gridColumns() }}>

            {dataArr.map((place, i) => {
                return (
                    <div
                        key={i + place[0]}
                        style={{
                            gridColumn: 1,
                            gridRow: i,
                            width: '100%'
                        }}
                        className='ChartPlaceName'
                    >
                        {place[0]}
                        <p>
                            {place[1].city}
                        </p>
                    </div>
                )
            })}

            {props.children}
        </div>
    </div>
    )


}

