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
                const height = info.totalNumberOfExhibitions / 4
                return (
                    <>
                        
                    <div className='proportionateFrame' key={'frame' + name}
                        style={{
                            width: '30vw',
                            height: `${height}vw`,
                            margin: '1vw',
                            backgroundColor: 'pink'
                        }}
                    >
                        {name} <small>{info.city}</small> <br/>
                        <b>{info.AADArtistsTotal} artists</b>  over <br/>
                         <b> {info.totalNumberOfExhibitions} {info.kindOfEvents}</b> in <br/>
                         <b>{info.yearsWithDataAmount}</b> years
                    <div style={{display: 'flex', flexWrap: 'wrap', overflow: 'visible'}}>
                        {info.yearsValues.map((val)=>{
                            return (
                                typeof val === 'number' && val > 0 &&
                                <div style={{height: `${val}vw`, width: `4vw`, backgroundColor: 'blue', margin: '0.1vw'}}>{val}</div>
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
