import React from "react";

interface EventsProps {
  day: number | null;
}

const Events: React.FC<EventsProps> = ({ day }) => {
  const eventsList: Record<number, string> = {
    1: 'Dia 1',
    15: 'Dia 2',
  };

  return (
    <p>{day !== null ? eventsList[day] : "Nenhum evento"}</p>
  );
};

export default Events;
