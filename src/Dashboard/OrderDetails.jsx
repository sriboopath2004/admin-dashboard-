import React from 'react';
import { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./Assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars ,faBell, faUser, faMoon } from "@fortawesome/free-solid-svg-icons";

function OrderDetails() {
  useEffect(() => {
    // Set background color outside the div (on the whole page)
    document.body.style.backgroundColor = "#2b2c40";

    // Cleanup function to reset background when component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
       
    <div style={{ display: "flex", width: "90vw", height: "0vh", fontFamily: "poppins" }}>
       <div style={{ width: "18%", borderColor: "black", border: "2px solid #373754", backgroundColor: "#373754",color: "#ffffff", padding: "20px", height: "92.9vh" }}>
        <div style={{ marginBottom: "20px",paddingTop: "3%",paddingLeft: "23%", display: "flex", width: "13vw", height: "9vh" }}>
           <img src={logo} alt="Logo" style={{ paddingTop: "2%", width: "55px", height: "35px" }} />
           <h3 style={{ marginLeft: "10px",fontSize: "22px" }}>Admin</h3>
         </div>
         <div>
         <span style={{ textDecoration: "underline", border: "1px solid #ff3131", width: "100%", display: "inline-block", marginBottom: "3%" }}></span>
         </div>
         <div style={{ height: "20px" }}></div>
         <ul style={{ display: "flex",flexDirection: "column",alignItems: "end", paddingLeft: "30%", padding: "0" }}>
           <li  onClick={() => handleNavigation("/Dashboard")} style={{ cursor: "pointer", marginBottom: "10px", fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px" }}>Dashboard</li>
           <li style={{ marginBottom: "10px", color: "#ff3131", fontSize: "large", display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px" }}>Order</li>
           <li onClick={() => handleNavigation("/FoodDetails")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px" }}>Menu</li>
           <li onClick={() => handleNavigation("/customerDetails")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer" ,fontSize: "21px" }}>Customer</li>
           <li onClick={() => handleNavigation("/SupplierInfo")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px" }}>Supplier</li>
           <li onClick={() => handleNavigation("/Notifications")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer" ,fontSize: "21px" }}>Notification</li>
           <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px"  }}>Support</li>
         </ul>
         <div style={{ fontSize: "12px", color: "#999", position: "absolute", bottom: "20px" }}>
           <h4 style={{ marginLeft: "21%",width:"60%", color: "#ffffff", display: "flex", justifyContent: "center" }}>Crave Corner Admin Dashboard</h4> 
           <h5 style={{ display: "flex", justifyContent: "center", color: "#ffffff" }}>2025 All Rights Reserved</h5>
         </div>
       </div>
     </div>
        <nav style={{ marginTop: "0.8%", display: "flex", justifyContent: "space-between", alignItems: "center",marginLeft: "20%", backgroundColor: "#373754", width: "79vw", borderRadius: "5px" }}>
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "3%" }}>
        <FontAwesomeIcon icon={faBars} size="2x" color="black" /> {/* Hamburger Icon */}
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "white", padding: "10px", borderRadius: "5px",backgroundColor: "#373754", width: "200px", }}>
             <input type="text" placeholder="Search...     🔍 " style={{ display: "flex", justifyContent: "center", width: "70%", padding: "8px",paddingLeft: '7%', borderRadius: "20px", fontSize: "19px" }} />
             {/* <FontAwesomeIcon icon={faSearch} size="2x" style={{ color: "black" }} /> */}
         </div>
        </div>
        <div style={{ display: "flex",  justifyContent: "space-evenly", width: "20%" }}>
        <FontAwesomeIcon icon={faBell} size="2x" color="black" /> {/* Notification Icon */}
        <FontAwesomeIcon icon={faMoon} size="2x" color="black" /> {/* Dark Mode Icon */}
        <FontAwesomeIcon icon={faUser} size="2x" color="black" /> {/* User Icon */}
        </div>
      </nav>
    <div style={{ height: "70px", fontFamily: "poppins",color: "#ffffff", background: "#2b2c40" }}>
    <div style={{ marginLeft: "22%",paddingTop: "0.5%",  width: "40%", height: "90px" }}>
        <h2 style={{ marginTop: "-0.1%",fontSize: "30px" }}>Your Orders</h2>
        <h4 style={{ marginTop: "-3.5%",fontSize: "25px" }}>This is your ordered list data</h4>
        <h3 style={{ backgroundColor: "#373754", width: "16%",display: "flex",justifyContent: "center", borderRadius: "10px",marginTop: "-10%", marginLeft: "170%" }}>Filter</h3>
     </div>

   </div>
    <div style={{fontFamily: "poppins",  backgroundColor: "#2b2c40", paddingTop: "1%" }}>
    
      <table style={{ marginTop: "0.8%", background: "#373754",borderRadius: "15px" ,width: "77%", color: "#ffffff", margin: "0 auto", marginLeft: "21%" }}>
        <tbody>
        <tr style={{ fontWeight: "bolder" }} >
            <td style={{ fontSize: "20px",  padding: "10px", textAlign: "center" }}>Order id</td>
            <td style={{  fontSize: "20px", padding: "10px", textAlign: "center" }}>Table No.</td>
            <td style={{  fontSize: "20px", padding: "10px", textAlign: "center" }}>Food items</td>
            <td style={{ fontSize: "20px",  padding: "10px", textAlign: "center" }}>Status</td>
            <td style={{ fontSize: "20px",  padding: "10px", textAlign: "center" }}>Action</td>
            <td style={{  fontSize: "20px", padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr style={{ }}>
            <td style={{ padding: "10px", textAlign: "center" }}>#001</td>
            <td style={{ padding: "10px", textAlign: "center" }}>02</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Chicken Briyani</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Pending</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>View</td>
            <td style={{ padding: "10px", textAlign: "center" }}>..</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "center" }}>#002</td>
            <td style={{ padding: "10px", textAlign: "center" }}>01</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Noodle</td>
            <td style={{  padding: "10px", textAlign: "center" }}>Preparing</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Update</td>
            <td style={{ padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr>
            <td style={{  padding: "10px", textAlign: "center" }}>#003</td>
            <td style={{ padding: "10px", textAlign: "center" }}>03</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Idly</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Delivered</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Complete</td>
            <td style={{  padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr>
            <td style={{  padding: "10px", textAlign: "center" }}>#004</td>
            <td style={{  padding: "10px", textAlign: "center" }}>04</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Meels</td>
            <td style={{  padding: "10px", textAlign: "center" }}>Pending</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>View</td>
            <td style={{  padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr>
            <td style={{  padding: "10px", textAlign: "center" }}>#005</td>
            <td style={{  padding: "10px", textAlign: "center" }}>06</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Plain Briyani</td>
            <td style={{  padding: "10px", textAlign: "center" }}>Preparing</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Update</td>
            <td style={{ padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr>
            <td style={{  padding: "10px", textAlign: "center" }}>#006</td>
            <td style={{  padding: "10px", textAlign: "center" }}>05</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Tomato Rice </td>
            <td style={{  padding: "10px", textAlign: "center" }}>Delivered</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Complete</td>
            <td style={{ padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "center" }}>#007</td>
            <td style={{ padding: "10px", textAlign: "center" }}>07</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Chicken Briyani</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Pending</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>view</td>
            <td style={{ padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr>
            <td style={{  padding: "10px", textAlign: "center" }}>#008</td>
            <td style={{ padding: "10px", textAlign: "center" }}>09</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Dosa</td>
            <td style={{  padding: "10px", textAlign: "center" }}>Preparing</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Update</td>
            <td style={{ padding: "10px", textAlign: "center" }}>...</td>
          </tr>
          <tr>
            <td style={{  padding: "10px", textAlign: "center" }}>#009</td>
            <td style={{  padding: "10px", textAlign: "center" }}>06</td>
            <td style={{  padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Plain Briyani</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Preparing</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Update</td>
            <td style={{  padding: "10px", textAlign: "center" }}>...</td>
          </tr>
             <tr>
            <td style={{ padding: "10px", textAlign: "center" }}>#009</td>
            <td style={{ padding: "10px", textAlign: "center" }}>06</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Plain Briyani</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Preparing</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Update</td>
            <td style={{ padding: "10px", textAlign: "center" }}>...</td>
          </tr>
           <tr>
            <td style={{  padding: "10px", textAlign: "center" }}>#008</td>
            <td style={{ padding: "10px", textAlign: "center" }}>09</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "6.8%" }}>Dosa</td>
            <td style={{  padding: "10px", textAlign: "center" }}>Preparing</td>
            <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5.5%" }}>Update</td>
            <td style={{ padding: "10px", textAlign: "center" }}>...</td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default OrderDetails;
