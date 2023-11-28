// import React from 'react'
import "../index.css";
import DateRange from "../components/Date/DateRange";

function DateForm() {
  return (
    <div className="date">
      <section className="about ml-7 mb-7">
        <h1 className="text-3xl font-bold text-blue-600">Continuando...</h1>
        <p className="about-text ml-1 text-lg">
          Defina a quantidade, a data inicial e final do medicamento
        </p>
      </section>

      <div className="flex flex-row">
        <div className="container">
          <div className="grid grid-cols-1">
            {/* INPUT DA QUANTIDADE - INICIO */}
            <div>
              <label className="block mb-2 text-lg font-medium text-blue-500 ml-7  ">
                Quantidade
              </label>
              <input
                type="number"
                id="amount"
                className="h-12 w-135 ml-7 m-2.5 px-6 flex text-2xl text-black bg-white   rounded-lg border-opacity-1 outline-none focus:border-blue-500 border-2 border-blue-300 transition duration-200 shadow-nx"
                placeholder=""
                required
              />
            </div>

            {/* INPUT DA DATA INICIAL E FINAL - INICIO */}
            <DateRange />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateForm;
