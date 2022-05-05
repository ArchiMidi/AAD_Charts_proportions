import React from 'react'
import { ReactComponent as Triangle } from "../assets/triangle.svg"

export default function Triangles(props) {
    const { dataArr } = props;

    return (
        <div>{dataArr.map((place, index) => {
            const name = place[0];
            const info = place[1];
            return (
                <div className='placeBox'
                    key={name + 'tri'}
                >
                    <p className='placeTitle'>
                        {name} <small>{info.city}</small> 
                        <b>{info.AADArtistsTotal} artists</b>  over 
                        <b> {info.totalNumberOfExhibitions} {info.kindOfEvents}</b> in
                        <b> {info.yearsWithDataAmount} </b> years
                    </p>
                    <div className='trisBox'>
                    {
                        makeBackgroundTriangles(index)}
                    </div>
                </div>
            )
        }
        )}
        </div>
    )
}
function makeBackgroundTriangles(index) {
    return <Triangle className='singleTriangle'

        style={{
            height: '2rem',
            transform: index % 2 === 0 && 'scaleY(-1)',
            stroke: 'white',
            position: 'absolute',
            left: index * 1.8 + 'rem'
        }} />;
}

