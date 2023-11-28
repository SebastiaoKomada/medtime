import React from "react";
import "./index.css"; // Certifique-se de fornecer o caminho correto para seu arquivo CSS

interface DatesMatrixProps {
  dates: { day: number | null; isCurrent: boolean }[][];
  onSelect: (day: number | null) => void;
  onDateClick: (day: number) => Promise<void>;
  selectedDate: number | null;
}

const DatesMatrix: React.FC<DatesMatrixProps> = ({ dates, onSelect, onDateClick, selectedDate }) => {
  const handleDateClick = async (day: number | null) => {
    onSelect(day);
    if (day !== null) {
      try {
        await onDateClick(day);
      } catch (error) {
        console.error("Error sending request to the back-end:", error);
      }
    }
  };

  return (
    <div className="mb-6">
      {dates.map((dateRow, rowIndex) => (
        <div key={rowIndex} className="flex">
          {dateRow.map((date) => (
            <div
              key={Math.random()}
              className={`w-12 text-center cursor-pointer ${date.isCurrent ? 'current-day' : ''} ${date.day === selectedDate && date.day !== null ? 'selected-date' : ''}`}
              onClick={() => handleDateClick(date.day)}
            >
              {date.day}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DatesMatrix;
