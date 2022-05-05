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
                        <b> {info.AADArtistsTotal} artists</b>  over 
                        <b> {info.totalNumberOfExhibitions} {info.kindOfEvents}</b> in
                        <b> {info.yearsWithDataAmount} </b> years
                        {info.yearsValues.map((el)=> ` ${el} -`)}
                    </p>
                    <div className='trisBox'>
                    {
                        makeBackgroundTriangles(index, info.totalNumberOfExhibitions, info.yearsValues)}
                    </div>
                </div>
            )
        }
        )}
        </div>
    )
}
function makeBackgroundTriangles(index, totalNumberOfExhibitions, yearsValues) {
    return new Array(totalNumberOfExhibitions).map(() => {
    return(
    <Triangle className='singleTriangle'

        style={{
            height: '2rem',
            transform: index % 2 === 0 && 'scaleY(-1)',
            stroke: 'white',
            position: 'absolute',
            left: index * 1.8 + 'rem'
        }} />
        )
    })
}

