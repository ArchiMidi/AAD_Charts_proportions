import Chart from "../components/Chart"

export default function Calendar(props) {
const {data} = props

  return (
    <div className="homeContainer">
    <h1>AAD_Presence</h1>
      <Chart data={data} />
    </div>

  )
}