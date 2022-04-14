import React from 'react'

export default function A4Container(props) {
    const { gridColumns, gridRows } = props;

    return (<div className='pageContainer'>
        <h3>AAD_CHART</h3>
        <div className='chartContainer' style={{ gridTemplateRows: gridRows, gridTemplateColumns: gridColumns }}>
            {props.children}
        </div>
    </div>
    )


}

