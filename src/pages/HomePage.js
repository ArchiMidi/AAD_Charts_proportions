import React from 'react'
import A4Container from '../components/A4Container'
export default function HomePage(props) {
    const { dataArr } = props


    return (
        <A4Container dataArr={dataArr}>
            <p style={{
                gridColumn: 2,
                gridRow: 3,
                width: '100%'
            }}>pip</p>
        </A4Container>
    )

}
