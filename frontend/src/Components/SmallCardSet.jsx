import React from 'react'
import SmallCard from './SmallCard'

function SmallCardSet() {
    return (
        <>
            <section id="shipping-information">
                <hr />
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center row">
                        <SmallCard icon="icon icon-truck" bolt="Free shipping" light="Over Rs.200" />
                        <SmallCard icon="icon icon-return" bolt="Money back" light="Return within 7 days" />
                        <SmallCard icon="icon icon-tags1" bolt="Buy 4 get 5th" light="50% off" />
                        <SmallCard icon="icon icon-help_outline" bolt="Any questions?" light="experts are ready" />
                    </div>
                </div>
                <hr />
            </section>
        </>
    )
}

export default SmallCardSet