import dataMap from "../utils/dataMap"

export default function HomePage() {
const data = dataMap()
console.log(data)
  return (
    <div className="home">
      <p>HomePage</p>
    </div>

  )
}