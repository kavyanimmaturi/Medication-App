import { useState } from "react";
import { Bs1CircleFill, BsImage, BsPerson } from "react-icons/bs";
import { CiCalendar, CiCamera, CiCircleCheck } from "react-icons/ci";
import { GoCircle } from "react-icons/go";
import { IoMdAlarm, IoMdCheckmark } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import Dashboard from "../Dashboard/Dashboard";
import "./PatientTracker.css";
const PatientTracker = () => {

   const [medicationTaken, setMedicationTaken] = useState(false);

   const handleMarkAsTaken = () => {
      setMedicationTaken(true);
   }

   return (
      <div>
         <Dashboard />
         <div className="patient-tracker-container">
            <div className="tracker-status">
               <div className="tracker-img">
                  <BsPerson size={40} />
               </div>
               <div className="patient-menu">
                  <h1 className="greet"> Good Afternoon!</h1>
                  <p className="view">Ready to stay on track with your medication?</p>
               </div>
            </div>
            <div className="status-container">
               <div className="streaks-boxes">
                  <div className="streaks">
                     <h1>{medicationTaken ? "1" : "0"}</h1>
                     <p>Day Streak</p>
                  </div>
               </div>
               <div className="streaks-boxes">
                  <div className="streaks">
                     {medicationTaken ? <TiTick size={40} className="tick-img" /> : <GoCircle size={28} className="circle-img" />}
                     <p>Today's Status</p>
                  </div>
               </div>
               <div className="streaks-boxes">
                  <div className="streaks">
                     <h1>{medicationTaken ? "3%" : "0"}</h1>
                     <p>Monthly Rate</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="medication-status">
            <div className="todays-status">
               <CiCalendar size={35} className="calendar" />
               <h1 className="medication-title">Today's Medication</h1>
            </div>

            <div>
               {medicationTaken ? (
                  <div>
                 <div className="success-cont">
                   <div className="success-message"> 
                        <CiCircleCheck size={80}/>
                        <h1 className="success-text">Medication Completed!</h1>
                        <p className="success-para">Great job! You've taken your medication for June 21, 2025</p>
                     </div>
                 </div> 
                 <div className="daily-set-success">
                     <div className="tick-set-success"> 
                        <div className="tick-box">
                        <CiCircleCheck size={40}/>
                      </div>
                        <div className="tick-schedule">
                        <h1 className="tick-text">Daily Medication Set</h1>
                        <p className="tick-completed">Complete set of daily tablets</p>
                     </div>
               </div>
               <div className="completed-set"> 
                   <CiCircleCheck/>
                   <p>8:00 AM</p>
               </div>   
      </div>
                       
         </div>
               ) : (
                  <>
                  <div className="schedule-box">
                        <div className="schedule-set">
                           <div className="complete-schedule">
                              <Bs1CircleFill size={40} className="circle" />
                           </div>
                           <div className="daily-schedule">
                              <h1 className="medication">Daily Medication Set</h1>
                              <p className="medication-para">Complete set of tablets daily</p>
                           </div>
                        </div>
                        <div className="clock-box">
                           <IoMdAlarm size={18} />
                           <p>8:00 AM</p>
                        </div>
                     </div>
                     <div className="add-photo-container">
                        <BsImage size={70} className="gallery-img" />
                        <h1 className="add-proof">Add Proof Photo (Optional)</h1>
                        <p className="take-medication-photo">Take a photo of your medication or pill organizer as confirmation</p>
                        <div className="photo-box">
                           <CiCamera size={30} className="camera-img" />
                           <p className="take-photo">Take Photo</p>
                        </div>
                     </div>
                      <div className="mark-as-taken">
               <IoMdCheckmark size={20} />
               <p className="mark-text" onClick={handleMarkAsTaken}>Mark as Taken</p>
            </div>
                     </>
               )}
            </div>
           
         </div>
      </div>




   )
}

export default PatientTracker


/*
<div className="schedule-box">
                  <div className="schedule-set">
                <div className="complete-schedule">
                    <Bs1CircleFill  size={40} className="circle"/>
               </div>
            <div className="daily-schedule">
                <h1 className="medication">Daily Medication Set</h1>
                <p className="medication-para">Complete set of tablets daily</p>
               </div>
               </div>
               <div className="clock-box">
                <IoMdAlarm  size={18}/>
                <p>8:00 AM</p>
               </div>
               </div>
               <div className="add-photo-container">
                <BsImage size={70} className="gallery-img" />
                  <h1 className="add-proof">Add Proof Photo (Optional)</h1>
                  <p className="take-medication-photo">Take a photo of your medication or pill organizer as confirmation</p>
                  <div className="photo-box">
                     <CiCamera size={30} className="camera-img"/>
                     <p className="take-photo">Take Photo</p>
                  </div>
               </div>
              */