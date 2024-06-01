import React from 'react'

function CusDashboardCard(props) {
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
    color: '#007bff',
  }
  const cardText = {
    fontSize: '18px',
    color: '#6c757d',

  }

  const btnCustom = {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderRadius:'5px',
  }
  const btnCustomHover = {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3',
  }

  return (
    <>
      <div style={card}>
        <div style={cardBody}>
          <h5 style={cardTitle}>{props.title}</h5>
          <p style={cardText}>{props.text}</p>
          <a href="#" className="m-0 btn btn-primary" style={btnCustom}>{props.btnText}</a>
        </div>
      </div>
    </>
  )
}

export default CusDashboardCard