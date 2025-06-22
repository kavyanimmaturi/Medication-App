import { useState } from "react";
import { BsHeart, BsPerson } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import CareTakerTracker from "../../Pages/CareTakerTracker/CareTakerTracker";
import PatientTracker from "../../Pages/PatientTracker/PatientTracker";
import "./Home.css";

const Home = () => {
    
    const [role,setRole] = useState("");
    const handlePatient = () => setRole("patient");
    const handleCaretaker = () => setRole("caretaker");

  if (role === "patient") return <PatientTracker/>;
  if (role === "caretaker") return <CareTakerTracker/>;

    return (
        <div className="home-container">
            <div className="home">
            <div className="home-image">
                <BsHeart size={40} />
            </div>
            <div className="home-section">
                <h1 className="home-title">Welcome to MediCare Companion</h1>
                <p className="home-para">Your trusted partner in medication management. Choose your role to get <br/> 
                                         <span className="span">started with personalized features.</span></p>
            </div>
            </div>
            <div className="home-section-cards">
                <div className="patient-card1">
                    <div className="image">
                     <BsPerson  size={40}/>
            </div>
            
            <h1 className="title">I'm a Patient</h1>
            <p className="caption">Track your medication schedule and maintain your <br/> <span className="span"> health records </span></p>
            <div className="card-details">
                <ul className="card-container">
                <li>Mark medications as taken</li>
                <li>Upload proof photos (optional)</li>
                <li>View your medication calendar</li>
                <li>Large, easy-to-use interface</li>
                </ul>
            </div>
            <button className="button patient-btn" onClick={handlePatient}>Continue as Patient</button>
            </div>
            <div className="patient-card2">
                <div className="image">
                  <MdPeopleOutline  size={40}/>
            </div>
            <h1 className="title">I'm a Caretaker</h1>
            <p className="caption">Monitor and support your loved one's medication <br/> <span className="span">adherence </span></p>
            <div className="card-details">
                <ul className="card-container">
                <li className="list-items">Monitor medications compliance</li>
                <li className="list-items">Set up notification preference</li>
                <li className="list-items">View detailed reports</li>
                <li className="list-items">Receive email alerts</li>
                </ul>
            </div>
            <button className="button care-taker-btn" onClick={handleCaretaker}>Continue as Caretaker</button>
            </div>
            </div>
            </div>
         
    )
}

export default Home
