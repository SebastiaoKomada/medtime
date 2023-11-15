/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import "antd/dist/antd";
import dayjs from "dayjs";
import { TimePicker } from "antd";

const format = "HH:mm";

function timeForm() {
  const [times, setTimes] = useState([dayjs("00:00", format)]);

  const addTimeField = (event: any) => {
    event.preventDefault(); // Evita a ação padrão do botão
    setTimes((prevTimes) => [...prevTimes, dayjs("00:00", format)]);
  };

  const removeTimeField = (index: any) => {
    setTimes((prevTimes) => {
      const updatedTimes = [...prevTimes];
      updatedTimes.splice(index, 1);
      return updatedTimes;
    });
  };

  const handleTimeChange = (time: any, index: any) => {
    setTimes((prevTimes) => {
      const updatedTimes = [...prevTimes];
      updatedTimes[index] = time;
      return updatedTimes;
    });
  };

  return (
    <div>
      {times.map((time, index) => (
        <div key={index} className="flex items-center mb-3">
          <TimePicker
            defaultValue={time}
            format={format}
            onChange={(time) => handleTimeChange(time, index)}
            className="h-12 w-135 ml-7 px-6 flex text-2xl text-black bg-white rounded-lg border-opacity-1 outline-none focus:border-blue-500 border-2 border-blue-300 transition duration-200 shadow-nx"
          />
          <button
            onClick={() => removeTimeField(index)}
            className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg border border-red-300 border-opacity-1 ml-3"
          >
            X
          </button>
        </div>
      ))}
      <div className="ml-7">
        <button
          onClick={addTimeField}
          className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg border border-blue-300 border-opacity-1"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default timeForm;
