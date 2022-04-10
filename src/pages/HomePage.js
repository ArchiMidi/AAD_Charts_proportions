import Chart from "../components/Chart"
import dataMap from "../utils/dataMap"

export default function HomePage() {
const data = dataMap()
console.log(data)
  return (
    <div className="homeContainer">
    <h1>AAD_Presence</h1>
      <Chart data={data} />
    </div>

  )
}