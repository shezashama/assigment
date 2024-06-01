import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";
import { Link } from "react-router-dom";
function Product() {
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    color: "",
    quantity: "",
    image: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const productAdd = async (e) => {
    e.preventDefault();

    const { productName, price, color, quantity, image } = productData;

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("quantity", quantity);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/product/addproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.message) {
        setProductData({
          productName: "",
          price: "",
          color: "",
          quantity: "",
          image: null,
        });
        setMessage(response.data.message);
      }
    } catch (error) {
      setErrMsg("Fail Add");
    }
  };
  const logout = async () => {
    try {
      const logOut = await axios.get("/user/logout");
      if (logOut.data) {
        // console.log(logOut.data.message);
        window.location.href = "http://localhost:5173/";
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const sidebar = {
    height: "100%",
    width: "250px",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "#343a40",
    paddingTop: "20px",
    overflowY: "auto",
  };
  const sidebarA = {
    padding: "10px 20px",
    textDecoration: "none",
    fontSize: "18px",
    color: "#f8f9fa",
    display: "block",
  };
  /* Main content */
  const content = {
    marginLeft: "250px",
    padding: "20px",
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      {/* <!-- Sidebar --> */}
      <div style={sidebar}>
        <a style={sidebarA} href="#" classNameName="active">
          <i classNameName="fa-home fas"></i> Dashboard
        </a>
        <Link to={"/product"}>
          <a style={sidebarA} href="#">
            <i classNameName="fa-box fas"></i> Products
          </a>
        </Link>
        <a style={sidebarA} href="#">
          <i classNameName="fa-users fas"></i> Customers
        </a>
        <a style={sidebarA} href="#">
          <i classNameName="fa-chart-bar fas"></i> Sales
        </a>
        <a style={sidebarA} href="#">
          <i classNameName="fa-cog fas"></i> Settings
        </a>
        <a style={sidebarA} onClick={logout}>
          <span style={{ cursor: "pointer" }}>Logout</span>
        </a>
      </div>

      <div style={content}>
        <div classNameName="container">
          <div classNameName="row d-flex justify-content-center">
            <div classNameName="col-10">
              <h1 classNameName="h3 mb-0 text-gray-800 mb-3">ADD Product</h1>

              <form onSubmit={productAdd}>
                <div className="row ">

          
                <div className="col-6">

                <label for="inputAddress" className="form-label">
                 Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  value={productData.productName}
                  onChange={handleInputChange}
                  placeholder="Product Name"
                  required
                />
                </div>
                <div className="col-6">
                  <label for="inputAddress" className="form-label">
                    price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                    required
                  />
                </div>
                </div>
                <div className="row">

                
                <div className="col-6">

                <label for="inputAddress" className="form-label">
                    color
                  </label>
                <input
                  type="text"
                  name="color"
                  value={productData.color}
                  onChange={handleInputChange}
                  placeholder="Color"
                  required
                />
                </div>
                <div className="col-6">

              
                <label for="inputAddress" className="form-label">
                   Quantity
                  </label>
                <input
                  type="text"
                  name="quantity"
                  value={productData.quantity}
                  onChange={handleInputChange}
                  placeholder="Quantity"
                  required
                />
                  </div>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  required
                />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
              </form>
              {message && <p>{message}</p>}
              {errMsg && <p>{errMsg}</p>}
            </div>
          </div>
        </div>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
}

export default Product;
