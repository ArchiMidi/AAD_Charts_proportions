import React from 'react'
import YearCard from '../components/YearCard';

export default function SecondPage(props) {
    const {data} = props
    const dataArr = [...data]
  return (
    <div className='secondContainer'>
        {dataArr.map((place, i)=>{
            let name = place[0];
            let info = place[1]
            return <YearCard name={name} info={info} index={i} key={i + name}/>
            })}
    </div>
  )
}
