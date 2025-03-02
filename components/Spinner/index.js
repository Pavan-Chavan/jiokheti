import React from "react";

const LoadingSpinner = ({ size = "medium", isLoading = true }) => {
  const sizeClass = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  }[size]

  if (!isLoading) return null

  return (
    <div className="loading-overlay">
      <div className="loading-backdrop"></div>
      <div className={`loading-container ${sizeClass}`}>
        <div className="logo-container">
          <div className="logo-text">
            <span className="jio">Jio</span>
            <span className="kheti">खेती</span>
          </div>
          <div className="leaves">
            <div className="leaf leaf-left"></div>
            <div className="leaf leaf-right"></div>
          </div>
        </div>
        <div className="spinner-ring"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner

