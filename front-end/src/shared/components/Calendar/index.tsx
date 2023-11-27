import React from "react";
import "./index.css";
import "./script.ts"

const Calender = () => {
  return (
      <div className="calendar">
        <div className="month">
          <i className="fas fa-angle-left prev"></i>
          <div className="date">
            <h1></h1>
            <p></p>
          </div>
          <i className="fas fa-angle-right next"></i>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days"></div>
      </div>
  );
};

export default Calender;
