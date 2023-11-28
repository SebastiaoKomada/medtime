/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function DatePicker() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="datePicker flex flex-row">
      <div className="mr-4">
        <label className="block mb-2 ml-7 text-lg font-medium text-blue-500">
          Data inicial
        </label>
        <input
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
          className="h-12 w-64 ml-7 mr-8 px-6 text-2xl text-black bg-white rounded-lg border-opacity-1 outline-none focus:border-blue-500 border-2 border-blue-300 transition duration-200 shadow-nx"
        />
      </div>

      <div>
        <label className="block mb-2 text-lg font-medium text-blue-500">
          Data final
        </label>
        <input
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
          className="h-12 w-64 px-6  mb-5 text-2xl text-black bg-white rounded-lg border-opacity-1 outline-none focus:border-blue-500 border-2 border-blue-300 transition duration-200 shadow-nx"
        />
      </div>
    </div>
  );
}

export default DatePicker;
