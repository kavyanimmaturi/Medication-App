import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { TbLetterMSmall } from "react-icons/tb";
import "./Dashboard.css";

const Dashboard = () => {

  const [role, setRole] = useState("");
  const text = role === "patient" ? "Patient View" : "Caretaker View";

  
  const switchRole = () => {
    setRole(role === "patient" ? "caretaker" : "patient");
  };

  return (
    <div>
    <div className="dashboard">
        <div className="dashboard-items">
        <div className="dashboard-image">
          <TbLetterMSmall size={60} />
        </div>
        <div className="dashboard-menu">
        <h1>MediCare Companion</h1>
        <p>{text}</p>
      </div>
      </div>
      <div className="button-box">
         
      <button className="switch-btn" onClick={switchRole}> 
              {role === "patient" ? (
          <>
           <MdPeopleOutline size={30} className="logo"/>Switch to Caretaker  
          </>
        ) : (
          <>
              <BsPerson className="logo" size={30}/>Switch to Patient
          </>
        )}
      </button>
      </div>
        </div>
        <div>
        </div>
       
      </div>
  )
}

export default Dashboard
