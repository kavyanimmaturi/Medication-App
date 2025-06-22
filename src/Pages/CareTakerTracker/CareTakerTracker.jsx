import { useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { BsToggleOn } from "react-icons/bs";
import { CiCalendar, CiCamera, CiCircleCheck } from "react-icons/ci";
import { IoIosNotificationsOutline, IoMdAlarm } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

import { MdPeopleOutline } from "react-icons/md";
import Dashboard from "../Dashboard/Dashboard";
import "./CareTakerTracker.css";
const CareTakerTracker = () => {

  const [activeTab, setActiveTab] = useState("overview");

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay(); 
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 

  const today = new Date();
  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const getCalendarDays = () => {
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return [...blanks, ...days];
  };

  return (
    <div>
      <Dashboard />
      <div className="care-taker-container">
        <div className="care-taker-status">
          <div className="tracker-image">
            <MdPeopleOutline size={40} />
          </div>
          <div className="care-taker-menu">
            <h1 className="taker-greet"> Caretaker Dashboard</h1>
            <p className="taker-text">Monitoring Eleanor Thompson's medication adherence </p>
          </div>
        </div>
        <div className="care-taker-dashboard">
          <div className="care-taker-box">
            <div className="care-taker">
              <h1>85%</h1>
              <p>Adherence Rate</p>
            </div>
          </div>
          <div className="care-taker-box">
            <div className="care-taker">
              <h1>5</h1>
              <p>Current Streak</p>
            </div>
          </div>
          <div className="care-taker-box">
            <div className="care-taker">
              <h1>3</h1>
              <p>Missed This Month</p>
            </div>
          </div>
          <div className="care-taker-box">
            <div className="care-taker">
              <h1>4</h1>
              <p>Taken This Week</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs-section">
          <button onClick={() => setActiveTab("overview")} className={activeTab === "overview" ? "tab active" : "normal"}>Overview</button>
          <button onClick={() => setActiveTab("recentActivity")} className={activeTab === "recentActivity" ? "tab active" : "normal"}>Recent Activity</button>
          <button onClick={() => setActiveTab("calendarView")} className={activeTab === "calendarView" ? "tab active" : "normal"}>Calendar View</button>
          <button onClick={() => setActiveTab("notification")} className={activeTab === "notification" ? "tab active" : "normal"}>Notifications</button>
        </div>
      </div>
      <div>
        {activeTab === "overview" && (
          <div className="overview-boxes-cont">
            <div className="overview-cont1">
              <div className="overview-box">
                <CiCalendar size={35} className="status-cal" />
                <h1 className="todays-text">Today's Status</h1>
              </div>
              <div className="medication-set-status">
                <div className="daily-set">
                  <h1 className="daily-text">Daily Medication Set</h1>
                  <p className="time-text">8:00 AM</p>
                </div>

                <button className="pending-btn">Pending</button>
              </div>
            </div>
            <div className="overview-cont2">
              <div className="overview-box2">
                <div className="action-box">
                  <h1>Quick Actions</h1>
                </div>
              </div>

              <div className="actions-box">
                <MdOutlineMail size={20} />
                <p>Send Reminder Email</p>
              </div>

              <div className="actions-box">
                <IoIosNotificationsOutline size={20} />
                <p>Configure Notifications</p>
              </div>

              <div className="actions-box">
                <LuCalendar size={20} />
                <p>View Full Calendar</p>
              </div>
            </div>

          </div>
        )}
      </div>
      <div>
        {activeTab === "recentActivity" && (
          <div className="recent-status">
            <div className="todays-status">
              <h1 className="recent-title">Recent Medication Activity</h1>
            </div>
            <div className="recent-box">
              <div className="recent-set">
                <div className="recent-schedule">
                  <CiCircleCheck size={40} className="tick" />
                </div>
                <div className="recent">
                  <h1>Monday, June 10</h1>
                  <p>Taken at 8:30 AM</p>
                </div>
              </div>
              <div className="recent-photo-box">
                <div className="photo-box">
                  <CiCamera size={30} className="alarm" />
                  <p>Photo</p>
                </div>
                <div className="photo-box">
                  <p>Completed</p>
                </div>
              </div>

            </div>
            <div className="recent-box">
              <div className="recent-set">
                <div className="recent-schedule">
                  <CiCircleCheck size={40} className="tick" />
                </div>
                <div className="recent">
                  <h1>Sunday, June 9</h1>
                  <p>Taken at 8:15 AM</p>
                </div>
              </div>
              <div className="recent-photo-box">
                <div className="photo-box">
                  <p>Completed</p>
                </div>
              </div>
            </div>
            <div className="recent-box">
              <div className="recent-set">
                <div className="recent-schedule">
                  <BiSolidError size={30} className="wrong-tick" />
                </div>
                <div className="recent">
                  <h1>Saturday, June 8</h1>
                  <p>Medication missed</p>
                </div>
              </div>
              <div className="recent-photo-box">
                <div className="missed-photo-box">
                  <p className="missed-btn">missed</p>
                </div>
              </div>
            </div>
            <div className="recent-box">
              <div className="recent-set">
                <div className="recent-schedule">
                  <CiCircleCheck size={40} className="tick" />
                </div>
                <div className="recent">
                  <h1>Friday, June 7</h1>
                  <p>Taken at 8:45 AM</p>
                </div>
              </div>
              <div className="recent-photo-box">
                <div className="photo-box">
                  <CiCamera size={30} className="alarm" />
                  <p>Photo</p>
                </div>
                <div className="photo-box">
                  <p>Completed</p>
                </div>
              </div>
            </div>
            <div className="recent-box">
              <div className="recent-set">
                <div className="recent-schedule">
                  <CiCircleCheck size={40} className="tick" />
                </div>
                <div className="recent">
                  <h1>Thursday, June 6</h1>
                  <p>Taken at 8:20 AM</p>
                </div>
              </div>
              <div className="recent-photo-box">
                <div className="photo-box">
                  <p>Completed</p>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
      <div>
        {activeTab === "calendarView" && (
          <div className="calendar-box">
            <div className="calendar-container">
              <h2 className="calendar-text">Medication Calendar Overview</h2>
              <div className="calendar">
                <div className="calendar-header">
                  <button onClick={() => setCurrentDate(new Date(year, month - 1))}>◀️</button>
                  <span>{currentDate.toLocaleString('default', { month: 'long' })}{year}</span>
                  <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>▶️</button>
                </div>
                <div className="calendar-grid">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="calendar-day-header">{d}</div>
                  ))}
                  {getCalendarDays().map((day, index) =>
                    day === null ? (
                      <div key={index} className="calendar-day empty"></div>
                    ) : (
                      <div key={index} className={`calendar-day ${isToday(day) ? "today" : ""}`}>
                        {day}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="daily-details">
              <div className="daily-box">
                <h1>Details for June 22, 2025</h1>
              </div>
              <div className="patient-details">
                <div>
                  <IoMdAlarm size={30} className="MdAlarm" />
                  <h1>Today</h1>
                </div>
                <p>Monitor Eleanor Thompson's medication status for today.</p>
              </div>

            </div>
          </div>
        )}
      </div>

      <div>
        {activeTab === "notification" && (
          <div className="recent-status">
            <div className="todays-status">
              <IoIosNotificationsOutline size={40} className="bell-icon" />
              <h1 className="recent-title">Notification Preferences</h1>
            </div>
            <div className="email-notification">
              <div className="notification-msg">
                <h1 className="email-not">Email Notifications</h1>
                <p className="via-email">Receive medication alerts via email</p>
              </div>
              <div className="toggle">
                <BsToggleOn size={40} />
              </div>
            </div>
            <div className="email-address">
              <h1 className="email">Email Address</h1>
              <input type="text" className="email-input" placeholder="caretaker@example.com" />
            </div>

            <hr className="separator" />
            <div className="email-notification">
              <div className="notification-msg">
                <h1 className="email-not">Missed Medication Alerts</h1>
                <p className="via-email">Get notified when medication is not taken on time</p>
              </div>
              <div className="toggle">
                <BsToggleOn size={40} />
              </div>
            </div>
            
            <div className="email-address">
              <h1 className="email">Alert me if medication isn't taken within</h1>
              <select name="alert" className="email-input" placeholder>
                <option value="1hour">1 Hour</option>
                <option value="2hours">2 Hours</option>
                <option value="3hours">3 Hours</option>
                <option value="4hours">4 Hours</option>
              </select>
            </div>
            <div className="email-address">
              <h1 className="email">Daily reminder time</h1>
              <input type="text" className="email-input" placeholder="20:00" />
              <p>Time to check if today's medication was taken</p>
            </div>
           
          </div>
        )}
      </div>
      <div className="monthly-progress-cont">
        <div className="progress-box">
          <h1 className="progress-text">Monthly Adherence Progress</h1>
        </div>
        <div className="overall-progress">
          <h1 className="text">Overall Progress</h1>
          <p>85%</p>
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
      <div className="settings-btn">
      <button className="save-btn">Save Notification Settings</button>
    </div>
    </div>
  )
}

export default CareTakerTracker


