import React , { useEffect} from "react";
import logo from "./Assets/Logo.png";
import hamburgerimgae from './Assets/hamburgerimgae.png';
import notificationbell from './Assets/notificationbell.png';
import darkmode from './Assets/darkmode.png';
import profileicon from './Assets/profileicon.png';
import { useNavigate } from "react-router-dom";

function Notifications() {

    useEffect(() => {
        // Set background color outside the div (on the whole page)
        document.body.style.backgroundColor = "#2b2c40";
    
        // Cleanup function to reset background when component unmounts
        return () => {
          document.body.style.backgroundColor = "white";
        };
      }, []);
      const navigate = useNavigate();
      const handleNavigate = () => {
        navigate("/AdminMenu");
      }

  return (
    <div>
            <div style={{ display: "flex", width: "90vw", height: "0vh", fontFamily: "poppins" }}>
              <div style={{ width: "18%", borderColor: "black", border: "2px solid #373754", backgroundColor: "#373754",color: "#ffffff", padding: "20px", height: "92.9vh" }}>
                <div style={{ marginBottom: "20px",paddingTop: "3%",paddingLeft: "23%", display: "flex", width: "13vw", height: "9vh" }}>
                  <img src={logo} alt="Logo" style={{ paddingTop: "2%", width: "55px", height: "35px" }} />
                  <h3 style={{ marginLeft: "10px" }}>Admin</h3>
                </div>
                <div>
                <span style={{ textDecoration: "underline", border: "1px solid #ff3131", width: "100%", display: "inline-block", marginBottom: "3%" }}></span>
                </div>
                <div style={{ height: "20px" }}></div>
                <ul style={{ display: "flex",alignItems: "end" ,flexDirection: "column", paddingLeft: "30%", padding: "0" }}>
                  <li onClick={handleNavigate} style={{ marginBottom: "10px", fontSize: "large",display: "flex", justifyContent: "center" }}>Dashboard</li>
                  <li  style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer"  }}>Order</li>
                  <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center" }}>Menu</li>
                  <li onClick={()=>navigate(-2)} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center"  }}>Customer</li>
                  <li onClick={()=>navigate(-1)} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center" }}>Supplier</li>
                  <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",color: "#ff3131"  }}>Notification</li>
                  <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center"  }}>Support</li>
                </ul>
                <div style={{ fontSize: "12px", color: "#999", position: "absolute", bottom: "20px" }}>
                  <h4 style={{ marginLeft: "21%",width:"60%", color: "#ffffff", display: "flex", justifyContent: "center" }}>Crave Corner Admin Dashboard</h4> 
                  <h5 style={{ display: "flex", justifyContent: "center", color: "#ffffff" }}>2025 All Rights Reserved</h5>
                </div>
              </div>
            </div>
              <nav style={{ marginTop: "0.8%", display: "flex", justifyContent: "space-between", alignItems: "center",marginLeft: "20%", backgroundColor: "#373754", width: "79vw", borderRadius: "5px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button style={{ marginRight: "10px", width: "40%", height: "40%",border: "none", backgroundColor: "#373754" }}>
                  <img src={hamburgerimgae} alt="hamburger" style={{ width: "42%",height: "42%" }} />
                </button>
                <div style={{ display: "flex", alignItems: "center", backgroundColor: "white", padding: "10px", borderRadius: "5px",backgroundColor: "#373754", width: "200px", }}>
                  <input type="search"  placeholder="Search here" style={{ borderRadius: "20px", padding: "10px", fontSize: "16px", border: "2px solid", width: "90%",height: "30px" }} />
                  
                </div>
              </div>
              <div style={{ display: "flex",  justifyContent: "flex-end", paddingLeft: "20%" }}>
                <button style={{ marginRight: "20px",border: "none", width: "20%", height: "30%", backgroundColor: "#373754" }}>
                  <img src={notificationbell} alt="notifivationbell"  style={{ paddingLeft: "40%", width: "22%", height: "15%" }} />
                </button>
                <button style={{ marginRight: "20px", width: "20%", height: "30%",border: "none", backgroundColor: "#373754",paddingTop: "1%" }}>
                  <img src={darkmode} alt="darkmode"  style={{ width: "17%", height: "20%", marginTop: "2%" }} />
                </button>
                <button style={{ border: "none", backgroundColor: "#373754" }}>
                  <img src={profileicon} alt="Profile Icon"  style={{ width: "30px", height: "30px", borderRadius: "50%" }} />
                </button>
              </div>
            </nav>
            <div style={{ height: "70px", fontFamily: "poppins",color: "#ffffff", background: "#2b2c40" }}>
    <div style={{ marginLeft: "22%",paddingTop: "1%",  width: "40%", height: "90px" }}>
        <h2 style={{ marginTop: "-0.1%" }}>Notifications</h2>
        <h4 style={{ marginTop: "-3.5%" }}>This is your Notification Section</h4>
        <h3 style={{ backgroundColor: "#373754", width: "16%",display: "flex",justifyContent: "center", borderRadius: "10px",marginTop: "-10%", marginLeft: "170%" }}>Filter</h3>
     </div>
    </div>
    <div style={{fontFamily: "poppins",  backgroundColor: "#2b2c40", paddingTop: "1%" }}>
    
    <table style={{ marginTop: "0.8%", background: "#373754",borderRadius: "15px" ,width: "77%", color: "#ffffff", margin: "0 auto", marginLeft: "21%" }}>
      <tbody>
      <tr style={{ fontWeight: "bolder" }} >
          <td style={{ fontSize: "20px",  padding: "10px", textAlign: "center" }}>Notification id</td>
          <td style={{  fontSize: "20px", padding: "10px", textAlign: "center" }}>Notification</td>
          <td style={{  fontSize: "20px", padding: "10px", textAlign: "center" }}>Rate</td>
          <td style={{ fontSize: "20px",  padding: "10px", textAlign: "center" }}>Time</td>
          <td style={{ fontSize: "20px",  padding: "10px", textAlign: "center" }}>Action</td>
          <td style={{  fontSize: "20px", padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr style={{ }}>
          <td style={{ padding: "10px", textAlign: "center" }}>#001</td>
          <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "7%" }}>New Order placed #1001</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>Food Incharge</td>
          <td style={{ padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{ padding: "10px", textAlign: "center" }}>View</td>
          <td style={{ padding: "10px", textAlign: "center" }}>..</td>
        </tr>
        <tr>
          <td style={{ padding: "10px", textAlign: "center" }}>#002</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>Order is Ready #1001</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>Supplier</td>
          <td style={{  padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{  padding: "10px", textAlign: "center" }}>Update</td>
          <td style={{ padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr>
          <td style={{  padding: "10px", textAlign: "center" }}>#003</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>Payment Confirmed #1001</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>User</td>
          <td style={{ padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{ padding: "10px", textAlign: "center" }}>Complete</td>
          <td style={{  padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr>
          <td style={{  padding: "10px", textAlign: "center" }}>#004</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>Paid #1001</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>Cashier</td>
          <td style={{  padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{  padding: "10px", textAlign: "center" }}>View</td>
          <td style={{  padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr>
          <td style={{  padding: "10px", textAlign: "center" }}>#005</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>New Order placed #1002</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>Food Incharge</td>
          <td style={{  padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{  padding: "10px", textAlign: "center" }}>Update</td>
          <td style={{ padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr>
          <td style={{  padding: "10px", textAlign: "center" }}>#006</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>Order is Ready #1001</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>Supplier </td>
          <td style={{  padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{  padding: "10px", textAlign: "center" }}>Complete</td>
          <td style={{ padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr>
          <td style={{ padding: "10px", textAlign: "center" }}>#007</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>ayment Confirmed #100</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>User</td>
          <td style={{ padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{ padding: "10px", textAlign: "center" }}>view</td>
          <td style={{ padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr>
          <td style={{  padding: "10px", textAlign: "center" }}>#008</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>Paid #1001</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>Cashier</td>
          <td style={{  padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{ padding: "10px", textAlign: "center" }}>Update</td>
          <td style={{ padding: "10px", textAlign: "center" }}>...</td>
        </tr>
        <tr>
          <td style={{  padding: "10px", textAlign: "center" }}>#009</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>Order is Ready #1001</td>
          <td style={{  padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>Supplier</td>
          <td style={{ padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{ padding: "10px", textAlign: "center" }}>Update</td>
          <td style={{  padding: "10px", textAlign: "center" }}>...</td>
        </tr>
           <tr>
          <td style={{ padding: "10px", textAlign: "center" }}>#009</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "7%" }}>Payment Confirmed #1001</td>
          <td style={{ padding: "10px",  textAlign: "-moz-initial", paddingLeft: "5%" }}>User</td>
          <td style={{ padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{ padding: "10px", textAlign: "center" }}>Update</td>
          <td style={{ padding: "10px", textAlign: "center" }}>...</td>
        </tr>
         <tr>
          <td style={{  padding: "10px", textAlign: "center" }}>#008</td>
          <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "7%" }}>Paid #1001</td>
          <td style={{ padding: "10px", textAlign: "-moz-initial", paddingLeft: "5%" }}>Cashier</td>
          <td style={{  padding: "10px", textAlign: "center" }}>2 min ago</td>
          <td style={{ padding: "10px", textAlign: "center" }}>Update</td>
          <td style={{ padding: "10px", textAlign: "center" }}>...</td>
          </tr>
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default Notifications