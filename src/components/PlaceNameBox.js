import React from 'react'

export default function PlaceNameBox({ place, i }) {
    return (
        <div className='chartPlaceNameBox'
            key={i + place[0]}
            style={{
                gridColumn: 1,
                gridRow: i + 2,
                width: '100%'
            }}
        >
            <p className='placeName'>
                {place[0]}
            </p>
            <p className='cityName'>{place[1].city}</p>
        </div>
    )
}
