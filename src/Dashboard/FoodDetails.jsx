import React, { useEffect } from "react";
import logo from "./Assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faBell, faUser, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Noodle from "./Assets/Noodle.jpg";
import chickenbriyani from "./Assets/chickenbriyani.jpg";
import dosa from "./Assets/dosa.jpg";
import idly from "./Assets/idly.jpg";
import tomatorice from "./Assets/tomatorice.jpg";
import meals from "./Assets/meals.jpg";
import plainbriyani from "./Assets/plainbriyani.jpg";
import eggrice from "./Assets/eggrice.jpg";

function FoodDetails() {
 
      useEffect(() => {
        // Set background color outside the div (on the whole page)
        document.body.style.backgroundColor = "#2b2c40";
    
        // Cleanup function to reset background when component unmounts
        return () => {
          document.body.style.backgroundColor = "white";
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
              <ul style={{ display: "flex",alignItems: "end" ,flexDirection: "column", paddingLeft: "30%", padding: "0" }}>
                <li  onClick={() => handleNavigation("/Dashboard")} style={{ marginBottom: "10px", fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px" }}>Dashboard</li>
                <li  onClick={() => handleNavigation("/OrderDetails")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer" ,fontSize: "21px" }}>Order</li>
                <li style={{ marginBottom: "10px" ,color: "#ff3131", fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px" }}>Menu</li>
                <li  onClick={() => handleNavigation("/CustomerDetails")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer" ,fontSize: "21px" }}>Customer</li>
                <li  onClick={() => handleNavigation("/SupplierInfo")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer",fontSize: "21px" }}>Supplier</li>
                <li  onClick={() => handleNavigation("/Notifications")} style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center" ,cursor: "pointer",fontSize: "21px" }}>Notification</li>
                <li style={{ marginBottom: "10px" , fontSize: "large",display: "flex", justifyContent: "center",cursor: "pointer" ,fontSize: "21px" }}>Support</li>
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
           </div>
          </div>
          <div style={{ display: "flex",  justifyContent: "space-evenly", width: "20%" }}>
          <FontAwesomeIcon icon={faBell} size="2x" color="black" /> {/* Notification Icon */}
          <FontAwesomeIcon icon={faMoon} size="2x" color="black" /> {/* Dark Mode Icon */}
          <FontAwesomeIcon icon={faUser} size="2x" color="black" /> {/* User Icon */}
          </div>
        </nav>
    <div style={{ height: "70px", fontFamily: "poppins",color: "#ffffff", background: "#2b2c40" }}>
    <div style={{ marginLeft: "22%",paddingTop: "1%",  width: "40%", height: "55px" }}>
        <h3 style={{ marginTop: "-0.1%", fontSize: "25px" }}>Foods</h3>
        <h4 style={{ marginTop: "-3.5%",fontSize: "20px" }}>This is your food menu list</h4>
        <div style={{ marginTop: "-10%"  ,marginLeft: "120%", width: "40%",height: "30%", display: "flex", justifyContent: "flex-start"}} >
         <input type="search" placeholder="Search here" style={{ borderRadius: "20px", padding: "10px", fontSize: "16px", border: "2px solid",height: "30px", width: "70%" }} /> 
        </div>
        <h3 style={{ backgroundColor: "#373754", width: "17%",display: "flex",justifyContent: "center", borderRadius: "10px",marginTop: "-20px", marginLeft: "170%" }}>New Menu</h3>
     </div>
   </div>
    <div style={{ backgroundColor: "#2b2c40", width: "80.60%",height: '508px' , display: "flex",justifyContent: "space-around",flexWrap: "wrap" ,marginLeft: "19.4%" }}>
      <div style={{ marginTop: "1%",borderRadius: "20px" , width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754",fontFamily: "poppins",  padding: "16px", borderRadius: "8px",paddingTop:"10%", textAlign: "center" }}>
             <div>
               <img src={Noodle} alt="foodpic" style={{  width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff" }}>Noodle</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s",color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       <div style={{ marginTop: "1%" , width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754", padding: "16px",paddingTop:"10%", borderRadius: "8px", textAlign: "center" }}>
             <div>
               <img src={chickenbriyani} alt="foodpic" style={{ width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff", fontFamily: "poppins" }}>Chicken Briyani</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       <div style={{ marginTop: "1%" , width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754", padding: "10px",paddingTop:"10%", borderRadius: "8px", textAlign: "center" }}>
             <div>
               <img src={dosa} alt="foodpic" style={{ width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff", fontFamily: "poppins" }}>Dosa</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       <div style={{ marginTop: "1%" , width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754", padding: "10px",paddingTop:"10%", borderRadius: "8px", textAlign: "center" }}>
             <div>
               <img src={idly} alt="foodpic" style={{ width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff", fontFamily: "poppins" }}>Idly</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s",color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       <div style={{ marginTop: "1%" , width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754", padding: "16px", borderRadius: "8px",paddingTop:"10%", textAlign: "center" }}>
             <div>
               <img src={tomatorice} alt="foodpic" style={{ width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff", fontFamily: "poppins" }}>Tomato Rice</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       <div style={{ marginTop: "1%" , width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754", padding: "16px", borderRadius: "8px", textAlign: "center",paddingTop:"10%" }}>
             <div>
               <img src={meals} alt="foodpic" style={{ width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff", fontFamily: "poppins" }}>Meals</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s",color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       <div style={{ marginTop: "1%" , width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754",paddingTop:"10%", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
             <div>
               <img src={plainbriyani} alt="foodpic" style={{ width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff", fontFamily: "poppins" }}>Plain Briyani</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       <div style={{ marginTop: "1%" ,width: "21%",paddingTop: "0%", height: "220px", display: "flex", justifyContent: "center",alignItems: "baseline"  }}>
       <div style={{ display: "grid", width: "100%",height: "220px" }}>
           <div style={{backgroundColor: "#373754", padding: "16px",paddingTop:"10%", borderRadius: "8px", textAlign: "center" }}>
             <div>
               <img src={eggrice} alt="foodpic" style={{ width: "100px", height: "100px", background: "#444", borderRadius: "50%", margin: "auto", marginBottom: "8px" }}></img> 
             </div>
             <p style={{ color: "#ffffff", fontFamily: "poppins" }}>Egg Rice</p>
             <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
               <FaEye style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaEdit style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
               <FaTrash style={{ cursor: "pointer", transition: "color 0.3s", color: "white" }} />
             </div>
           </div>
         </div>
       </div>
       </div>
   </div>
  )
}

export default FoodDetails;