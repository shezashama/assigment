import React from 'react'

function DashboardCard(props) {
    const card = {
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
    }
    const cardBody = {
        padding: '20px',
    }
    const cardTitle = {
        marginBottom: '20px',
        color: 'white',
    }
    const cardText = {
        fontSize: '24px',
        fontWeight: 'bold',
    }

    return (
        <>
            <div className={`${props.bgColor} text-white`} style={card}>
                <div style={cardBody}>
                    <h5 style={cardTitle}>{props.title}</h5>
                    <p style={cardText}>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default DashboardCard