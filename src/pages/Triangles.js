import React from 'react'
import { ReactComponent as Triangle } from "../assets/triangle.svg"

export default function Triangles(props) {
    const { dataArr } = props;

    return (
        <div>{dataArr.map((place, index) => {
            const name = place[0];
            const info = place[1];
            return (
                <Triangle
                    key={name + 'tri'}
                    style={{
                        width: '5rem',
                        transform: index % 2 === 0 && 'scaleY(-1)',
                        stroke: 'red',

                }} />
            )
        }
        )}
        </div>
    )
}
