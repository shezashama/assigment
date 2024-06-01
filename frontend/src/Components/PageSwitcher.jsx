import React from 'react'

function PageSwitcher() {
    return (
        <>
            <nav className="text-center navigation padding-medium paging-navigation" role="navigation">
                <div className="d-flex justify-content-center loop-pagination pagination">
                    <a href="#" className="d-flex align-items-center pagination-arrow">
                        <i className="icon-arrow-left icon"></i>
                    </a>
                    <span aria-current="page" className="current page-numbers">1</span>
                    <a className="page-numbers" href="#">2</a>
                    <a className="page-numbers" href="#">3</a>
                    <a href="#" className="d-flex align-items-center pagination-arrow">
                        <i className="icon-arrow-right icon"></i>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default PageSwitcher