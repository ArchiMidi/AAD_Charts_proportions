import React from 'react'
import TrianglesYearsLine from '../components/TrianglesYearsLine'
import { ReactComponent as Triangle } from "../assets/triangle.svg"


export default function InlineTriangles(props) {
  function calculateTriangleSide(area) {
    return Math.sqrt(4 * area / 1.7320508075688772) * 10
  }

  const { data } = props
  const dataArr = [...data]
  const totalYears = 28
  return (
    <div className='secondContainer'>
      {Array(28).map((el, i) => {
        return (
          <p key={1998 + i}
          style={{position: 'absolute', top: '1rem', left:`${ i * 3 + 5 }rem `}}>YEAR{1998 + i}</p>
        )
      })}
      {dataArr.map((place, placeIndex) => {
        let name = place[0];
        let info = place[1]
        return (
          <div
            key={name}
            style={{
              position: 'absolute',
              top: `${(placeIndex + 1) * 3 + 3}rem`,
              borderBottom: '1px solid black',
              width: '100rem'
            }}
          >
            <p>{name}</p>
            {info.yearsValues.map((value, i) => {
              return typeof value === 'number' ?
               <Triangle
                key={name + value + i}
                width={(value !== 0 ? calculateTriangleSide(value) : 10)}
                style={{
                  position: 'absolute',
                  left: `${i * 3 + 5}rem`,
                  borderLeft: '1px solid pink',
                  bottom: (value !== 0 ? "0rem" : -10),
                  stroke: 'white',
                  strokeWidth: '0.08rem',
                  strokeLinejoin: 'round',
                  fill: value === 0 && "red",
                  transform: value === 0 && 'scaleY(-1)'
                  
                }}
              /> : <p  style={{position: 'absolute',
                  left: `${i * 3 + 5}rem`,
                  alignText: "left",
                  borderLeft: '1px solid red',}}>
                  {/* x */}
                  </p>
            })}
          </div>
        )
      })}
    </div>
  )
}
