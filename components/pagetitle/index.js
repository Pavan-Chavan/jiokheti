import React from 'react'
import Link from 'next/link'
import { getImagePath } from '../../utils/blogUtils';

const PageTitle = (props) => {
    return(
        <div className="tp-breadcumb-area" style={{top:"80px"}}>
						{/* <img src={getImagePath(props.image)} alt="" /> */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;