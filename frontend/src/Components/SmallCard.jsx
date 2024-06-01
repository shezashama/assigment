import React from 'react'

function SmallTitleCard(props) {
    return (
        <>
            <div className="col-sm-6 col-md-3">
                <div className="icon-box">
                    <i className={props.icon}></i>
                    <h4 className="block-title">
                        <strong>{props.bolt}</strong> {props.light}
                    </h4>
                </div>
            </div>
        </>
    )
}

export default SmallTitleCard