import React from 'react'


const SectionTitle = (props) => {
    return(
        <div className="row">
            <div className="wpo-section-title">
                <span>{props.topTitle}</span>
                <h2>{props.MainTitle}</h2>
                <div className="section-title-img">
                    <img src='images/section-title.png' alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;