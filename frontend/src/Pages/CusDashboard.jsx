import React from 'react'
import CusDashboardCard from '../Components/CusDashboardCard';

function CusDashboard() {
    const sidebar = {
        height: '100%',
        width: '250px',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: '#343a40',
        paddingTop: '20px',
        overflowY: 'auto',
    }
    const sidebarA = {
        padding: '10px 20px',
        textDecoration: 'none',
        fontSize: '18px',
        color: '#f8f9fa',
        display: 'block',
    }
    /* Main content */
    const content = {
        marginLeft: '250px',
        padding: '20px',
    }
    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

            <div style={sidebar}>
                <a style={sidebarA} href="#" className="active"><i className="fa-home fas"></i> Dashboard</a>
                <a style={sidebarA} href="#"><i className="fa-shopping-cart fas"></i> Orders</a>
                <a style={sidebarA} href="#"><i className="fa-user fas"></i> Profile</a>
                <a style={sidebarA} href="#"><i className="fa-cog fas"></i> Settings</a>
            </div>

            <div style={content}>
                <h2 className="mb-4">Dashboard</h2>
                <div className="row">
                    <div className="col-md-6">
                        <CusDashboardCard
                            title="My Orders"
                            text="View and track your orders"
                            btnText="View Orders"
                        />
                    </div>
                    <div className="col-md-6">
                        <CusDashboardCard
                            title="My Profile"
                            text="Update your personal information"
                            btnText="Edit Profile"
                        />
                    </div>
                </div>
            </div>


            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

        </>
    )
}

export default CusDashboard