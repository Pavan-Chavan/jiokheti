function CategorySelector({ onSelect }) {
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <main style={{ minHeight: "100vh", padding: "16px" }}>
            <div style={{ marginBottom: "80px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div onClick={() => onSelect("district")}
                  style={{ cursor : 'pointer', padding: "16px", border: "1px solid #e0e0e0", borderRadius: "8px", backgroundColor: "#f0f9f0" }}
                >
                  <h2 style={{ fontWeight: "600" }}>जिल्हानिहाय निवड</h2>
                  <p style={{ fontSize: "14px", marginTop: "8px" }}>जिल्हानिहाय बाजार दरासाठी या टॅबवर क्लिक करा.</p>
                </div>

                <div onClick={() => onSelect("crop")}
                  style={{ padding: "16px", border: "1px solid #e0e0e0", borderRadius: "8px", backgroundColor: "#f0f9f0" }}
                >
                  <h2 style={{ fontWeight: "600" }}>शेतमाल निहाय निवड</h2>
                  <p style={{ fontSize: "14px", marginTop: "8px" }}>शेतमाल निहाय दरासाठी या टॅबवर क्लिक करा.</p>
                </div>
              </div>
            </div>
          </main>
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={{color:"#166539", backgroundColor: "rgb(220 252 231)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"}} onClick={() => onSelect("district")}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-geo-alt fs-1 mb-3"></i>
                <h3>जिल्हानिहाय निवड</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100" style={{color:"#166539", backgroundColor: "rgb(220 252 231)"}} onClick={() => onSelect("crop")}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-flower1 fs-1 mb-3"></i>
                <h3>शेतमाल निहाय निवड</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CategorySelector
  
  