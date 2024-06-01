import React from 'react'

function Artical(props) {
    return (
        <>
            <article className="col-md-4 post-item">
                <div className="zoom-effect image-holder">
                    <a href={props.link}>
                        <img src={props.img} alt="post" className="post-image" />
                    </a>
                </div>
                <div className="d-flex post-content">
                    <div className="meta-date">
                        <div className="text-primary meta-day">{props.day}</div>
                        <div className="meta-month">{props.month}</div>
                    </div>
                    <div className="post-header">
                        <h3 className="post-title">
                            <a href={props.link}>{props.text}</a>
                        </h3>
                        <a href="blog.html" className="blog-categories">{props.category}</a>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Artical