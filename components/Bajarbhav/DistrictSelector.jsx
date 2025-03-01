const districts = ["Amravati", "Nagpur", "Pune", "Mumbai", "Nashik", "Aurangabad"]

function DistrictSelector({ onSelect, districts }) {
  return (
    <div className="text-center">
      <h2 className="mb-4" style={{color:"#15803d"}}>जिल्हानिहाय</h2>
      <div className="row row-cols-2 row-cols-md-3 g-4 pb-3">
        {districts.map((district) => (
          <div className="col" key={district.code}>
            <div className="card h-100" style={{color:"#166539", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"}} onClick={() => onSelect({ type: "district", body :  {type : "DistrictCommodityGird", code : district.code, slug : district.slug}})}>
              <div className="card-body">
                <h5 className="card-title">{district.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DistrictSelector;

