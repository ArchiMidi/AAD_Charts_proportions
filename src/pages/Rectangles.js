import React from 'react'



export default function Rectangles(props) {
    const { dataArr } = props

    return (
        <div>

            {dataArr.map((place, i) => {
                const name = place[0];
                const info = place[1];
                const height = info.totalNumberOfExhibitions * 100
                return (
                    <div className='proportionateFrame' key={'frame' + name}
                        style={{
                            width: '100px',
                            height: `${height}px`,
                            margin: '10px',
                            backgroundColor: 'pink',
                        }}
                    >
                        {/* {name} */}
                    </div>
                )
            })}

        </div>
    )

}
