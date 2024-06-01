import React from 'react'

function InstaPicCard(props) {
    return (
        <div className="col-sm-6 col-lg-2 col-md-4">
            <figure className="zoom-effect">
                <img src={props.link} alt="instagram" className="insta-image" />
                <i className="icon icon-instagram"></i>
            </figure>
        </div>
    )
}

export default InstaPicCard