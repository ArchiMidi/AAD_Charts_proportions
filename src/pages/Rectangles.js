import React from 'react'



export default function Rectangles(props) {
    const { dataArr } = props

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap-reverse',
            width: '200vw',
            height:'',
        }}>

            {dataArr.map((place, i) => {
                const name = place[0];
                const info = place[1];
                const height = info.totalNumberOfExhibitions / 5
                return (
                    <div className='proportionateFrame' key={'frame' + name}
                        style={{
                            minWidth: '30vw',
                            height: `${height}vw`,
                            margin: '1vw',
                            backgroundColor: 'pink'
                        }}
                    >
                        {name}
                    </div>
                )
            })}

        </div>
    )

}
