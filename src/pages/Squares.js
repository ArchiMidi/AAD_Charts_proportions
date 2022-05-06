import React from 'react'


export default function Squares(props) {
    const { dataArr } = props;

    return (
        <div>{dataArr.map((place, index) => {
            const name = place[0];
            const info = place[1];
            return (
                <div className='placeBox'
                    key={name + 'squaresbox'}
                >
                    <p className='placeTitle'>
                        {name} <small>{info.city}</small>
                        <b> {info.AADArtistsTotal} artists</b>  over
                        <b> {info.totalNumberOfExhibitions} {info.kindOfEvents}</b> in
                        <b> {info.yearsWithDataAmount} </b> years
                        {info.yearsValues.map((el) => typeof el !== 'number' ? `${el} - ` : `area ${el} : side ` + Math.sqrt(4 * el / Math.sqrt(3)) + ' - ')}
  })}
                    </p>
                    <div className='squaresBox'
                        style={{ height: Math.floor(info.totalNumberOfExhibitions / 10) * 2 + 2 + 'rem' }}
                    >
                        {makeBackgroundSquares(info.totalNumberOfExhibitions, info.yearsValues)}
                        {makeIslandsSquares(info.AADArtistsTotal, info.yearsValues)}
                    </div>
                </div>
            )
        }
        )}
        </div>
    )
}
function makeBackgroundSquares(AADArtistsTotal, yearsValues) {
    // return new Array(AADArtistsTotal).map(() => {
    const arr = Array(AADArtistsTotal).fill('')
    return (arr.map((el, i) => {
        return (


            <div
                style={{
                    height: '1.8rem',
                    width: '1.8rem',
                    backgroundColor: 'red',
                    border: '0.1rem solid black',
                    position: 'absolute',
                    left: i % 10 * 2 + 'rem',
                    top: Math.floor(i / 10) * 2 + 'rem'
                }} />
        )
    }
    )
    )
}
function makeIslandsSquares(totalNumberOfExhibitions, yearsValues) {
    // return new Array(totalNumberOfExhibitions).map(() => {
    const arr = Array(totalNumberOfExhibitions).fill('')
    return (arr.map((el, i) => {
        return (


            <div
                style={{
                    height: '1.8rem',
                    width: '1.8rem',
                    backgroundColor: 'lightblue',
                    border: '0.1rem solid black',
                    position: 'absolute',
                    left: 24 + i % 10 * 2 + 'rem',
                    top: Math.floor(i / 10) * 2 + 'rem'
                }} />
        )
    }
    )
    )

}

