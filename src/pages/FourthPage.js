import React from 'react'

export default function FourthPage(props) {
    const { dataArr } = props

    const maxAmountOfExhibitions = dataArr.map(el => el[1].totalNumberOfExhibitions).reduce((acc, val)=>{
        return val > acc ? val : acc
    })

    const gridColumns = () => {
        return 'min-content ' + dataArr[0][1].yearsValues.map((el, i) => '5rem ').join('')
    }
    const gridRows = () => {
        return dataArr.map((el, i) => '5rem ').join('')
    }


    return (
        <div className='fourthContainer'>
        <h3>AAD_CHART</h3>
        <div className= 'chartContainerPageFour'>

            {dataArr.map((el) => {
                return <>el</>
            })}
        </div>
        </div>
    )
}
