import React from 'react'

export default function NewRectangles(props) {
    const { dataArr } = props;
    return (
        <div>{dataArr.map((el) => {
            return (
                <p>{el[0]}</p>
            )
        }
        )}
        </div>
    )
}
