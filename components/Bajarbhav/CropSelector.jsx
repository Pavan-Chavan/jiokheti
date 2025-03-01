
function CropSelector({ onSelect, crops }) {
  return (
    <div className="text-center">
      <h2 className="mb-4" style={{color:"#15803d"}}>शेतमाल निहाय</h2>
      <div className="row row-cols-2 row-cols-md-3 g-4 pb-3">
        {crops.map((crop) => (
          <div className="col" key={crop.name}>
            <div className="card h-100" style={{color:"#166539", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"}} onClick={() => onSelect({ type: "crop", body :  {type : "CommodityGird", slug: crop.slug, code : crop.code} })}>
              <img src={crop.image || "/placeholder.svg"} className="card-img-top" alt={crop.name} />
              <div className="card-body">
                <h5 className="card-title">{crop.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
  
  export default CropSelector;
  
  