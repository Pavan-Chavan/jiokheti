import { useEffect } from "react"
import parse from "html-react-parser";

function RateDisplay({ table }) {
  if (table.status === "error") {
    return (
      <div className="text-center">
      <div className="card">
        {table.data}
      </div>
    </div>
    )
  }
  return (
    <div className="text-center">
      <div className="card">
        <div className="card-body">
            {table.data && parse(table.data) || "loading"}
        </div>
      </div>
    </div>
  )
  }
  export default RateDisplay
  
  