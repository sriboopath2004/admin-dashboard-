import React , { useEffect} from "react";
import logo from "./Assets/Logo.png";
import hamburgerimgae from './Assets/hamburgerimgae.png';
import notificationbell from './Assets/notificationbell.png';
import darkmode from './Assets/darkmode.png';
import profileicon from './Assets/profileicon.png';
import { useNavigate } from "react-router-dom";
import profileimage from "./Assets/profileimage.png";
// import searchimg from './Assets/searchimg.png';

function AdminMenu() {
    const barStyle = (height) => ({
      height: "40px",
      width: '30px',
      backgroundColor: '#e63946', // Red color for the bars
      borderRadius: '5px',
    });
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
      navigate("/OrderDetails");
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
          <li style={{ marginBottom: "10px", color: "#ff3131", fontSize: "large",display: "flex", justifyContent: "center", cursor: "pointer" }}>Dashboard</li>
          <li onClick={handleNavigate} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer"  }}>Order</li>
          <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center", cursor: "pointer" }}>Menu</li>
          <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center" , cursor: "pointer" }}>Customer</li>
          <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center", cursor: "pointer" }}>Supplier</li>
          <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center", cursor: "pointer"  }}>Notification</li>
          <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center", cursor: "pointer"  }}>Support</li>
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
    <div style={{ color: "#ffffff",fontFamily: "poppins" , backgroundColor: "#2b2c40", width: "77%",display: "flex", flexDirection: "row",justifyContent: "space-around" ,paddingTop: "1%", marginLeft: "21%" }}>
    <div style={{ backgroundColor: "#373754", marginBottom: "20px",height:"100px",borderRadius: "15px",width:"15%",display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center" }}>
      <h4 style={{ marginTop: "25%" }}>Total Orders</h4>
      <h3 style={{ marginTop: "-5%", paddingBottom: "8%" }}>1,274</h3>
    </div>
    <div style={{ backgroundColor: "#373754", marginBottom: '20px',height:"100px",borderRadius: "15px",width:"15%",display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center" }}>
      <h4 style={{ marginTop: "25%" }}>Pending Orders</h4>
      <h3 style={{ marginTop: "-5%", paddingBottom: "8%" }}>26</h3>
    </div>
    <div style={{ backgroundColor: "#373754", marginBottom: '20px',height:"100px",borderRadius: "15px",width:"15%",display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center" }}>
      <h4 style={{ marginTop: "25%" }}>Completed Orders</h4>
      <h3 style={{ marginTop: "-5%", paddingBottom: "8%" }}>958</h3>
    </div>
    <div style={{ backgroundColor: "#373754", marginBottom: "20px",height:"100px",borderRadius: "15px",width:"15%", display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center" }}>
      <h4 style={{ marginTop: "25%" }}>Active Suppliers</h4>
      <h3 style={{ marginTop: "-5%", paddingBottom: "8%" }}>5</h3>
    </div>
  </div>
  <div style={{ color: "#ffffff", marginLeft: "20.3%",height: "375px", backgroundColor: '#373754',marginTop: "0%" ,padding: '20px', borderRadius: '10px', width: '43%' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Order Status Overview</h2>
      </div>

      {/* Chart Section */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
        {/* Y-axis labels */}
        <div style={{ color: 'white', fontSize: '14px' }}>
          <span>40%</span>
          <br />
          <span>30%</span>
          <br />
          <span>20%</span>
          <br />
          <span>10%</span>
          <br />
          <span>0%</span>
        </div>

        {/* Bar Chart */}
        <div style={{ display: 'flex', justifyContent: 'space-between',paddingTop: "20%", width: '80%' }}>
          {/* Individual Bars */}
          <div style={{ textAlign: 'center' }}>
            <div style={barStyle(30)}></div>
            <span style={{ color: 'white', fontSize: '12px', marginTop: '10px' }}>10% Out of Delivery</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={barStyle(40)}></div>
            <span style={{ color: 'white', fontSize: '12px', marginTop: '10px' }}>30% Preparing</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={barStyle(10)}></div>
            <span style={{ color: 'white', fontSize: '12px', marginTop: '10px' }}>20% Pending</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={barStyle(20)}></div>
            <span style={{ color: 'white', fontSize: '12px', marginTop: '10px' }}>40% Completed</span>
          </div>
        </div>
      </div>
      <div style={{  height: "40%" }}>
      <button style={{ backgroundColor: "#2b2c40",color: "#ffffff",fontSize: "13px", marginTop: "7%", marginLeft: "15%",width: "25%", height: "35px",borderRadius: "15px"  }}>
        10% Out of Delivery
      </button>
      <button style={{ backgroundColor: "#2b2c40",color: "#ffffff",fontSize: "13px", marginTop: "7%", marginLeft: "15%",width: "25%", height: "35px",borderRadius: "15px"  }}>
        20% Out of Pending
      </button>
      <button style={{ backgroundColor: "#2b2c40",color: "#ffffff",fontSize: "13px", marginTop: "3%", marginLeft: "15%",width: "25%", height: "35px",borderRadius: "15px"  }}>
        30% of Preparing
      </button>
      <button style={{ backgroundColor: "#2b2c40",color: "#ffffff",fontSize: "13px", marginTop: "3%", marginLeft: "15%",width: "25%", height: "35px",borderRadius: "15px"  }}>
        40% of Completed
      </button>
      </div>
     </div>
     <div style={{  height: "390px",marginTop: "-29%" ,width: "31%",backgroundColor: "#373754" ,borderRadius: "20px" , fontFamily: "poppins",marginLeft: "67%", display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center" }}>
        <h2 style={{ marginLeft: "8%",color: "#ffffff", fontFamily: "poppins" }}>Customers Reviews</h2>
    <div style={{ backgroundColor: "#2b2c40", width: "80%" ,position: "relative", padding: "10px", borderRadius: "15px" }}>
      <div style={{ display: "flex", flexDirection: "row", height: "80px" }}> 
        <img src={profileimage}  alt="profile" style={{ padding: "4.5%", width: "40px", height: "40px" }} />
        <h5 style={{ marginTop: "20px", color: "#ffffff" }}>
        Always love the quick service and tasty food!...
        </h5>
      </div>
      <button style={{ position: "absolute",  right: "10px",fontFamily: "poppins",  bottom: "10px",  padding: "8px 16px",  backgroundColor: "#373754",  color: "#ffffff",  border: "none",  borderRadius: "15px",  cursor: "pointer" }} >
        Reply
      </button>
    </div>
    <div style={{ backgroundColor: "#2b2c40", marginTop: "1%",width: "80%", position: "relative", padding: "10px", borderRadius: "15px" }}>
      <div style={{ display: "flex", flexDirection: "row", height: "80px" }}> 
        <img src={profileimage}  alt="profile" style={{ padding: "4.5%", width: "40px", height: "40px" }} />
        <h5 style={{ marginTop: "20px", color: "#ffffff" }}>
        Impressed with the seamless ordering process and quality...
        </h5>
      </div>
      <button style={{ fontFamily: "poppins", position: "absolute",  right: "10px",  bottom: "10px",  padding: "8px 16px",  backgroundColor: "#373754",  color: "#ffffff",  border: "none",  borderRadius: "15px",  cursor: "pointer" }} >
        Reply
      </button>
    </div>
    <div style={{ backgroundColor: "#2b2c40",marginTop: "1%", position: "relative",width: "80%", padding: "10px", borderRadius: "15px" }}>
      <div style={{ display: "flex", flexDirection: "row", height: "80px" }}> 
        <img src={profileimage}  alt="profile" style={{ padding: "4.5%", width: "40px", height: "40px" }} />
        <h5 style={{ marginTop: "20px", color: "#ffffff" }}>
        Food was good, but the delivery took too long. Hoping for a faster experience next time...
        </h5>
      </div>
      <button style={{ position: "absolute", fontFamily: "poppins", right: "10px",  bottom: "10px",  padding: "8px 16px",  backgroundColor: "#373754",  color: "#ffffff",  border: "none",  borderRadius: "15px",  cursor: "pointer" }} >
        Reply
      </button>
    </div>
    </div>
    </div>
  );
}

export default AdminMenu;