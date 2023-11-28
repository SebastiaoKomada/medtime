// import React from "react";
import "../index.css";

function RegisterForm() {
  return (
    <div className="register">
      <section className="about ml-7 mb-7">
        <h1 className="text-3xl font-bold text-blue-600">Vamos começar?</h1>
        <p className="about-text ml-1 text-lg">
          Insira nos campos o nome do seu medicamento e o seu tipo
        </p>
      </section>

      <div className="flex flex-row">
        <div className="container">
          <div className="grid grid-cols-1">
            {/* INPUT DO NOME DO MEDICAMENTO - INICIO */}
            <div>
              <label className="block mb-2 text-lg font-medium text-blue-500 ml-7  ">
                Nome do medicamento
              </label>
              <input
                type="text"
                id="name"
                className="h-12 w-135 ml-7 m-2.5 px-6 flex text-2xl text-black bg-white   rounded-lg border-opacity-1 outline-none focus:border-blue-500 border-2 border-blue-300 transition duration-200 shadow-nx"
                placeholder="Insira o nome do medicamento"
                required
              />
            </div>

            {/* INPUT OPÇÕES DE MEDICAMENTOS - INICIO */}

            <div>
              <label className="block mt-5 mb-2 text-lg font-medium text-blue-500 ml-7 ">
                Tipo de medicamento
              </label>

              <select
                id="type"
                name="type"
                className="h-12 w-135 ml-7 mb-5 px-3 text-lg text-black bg-white rounded-lg border-opacity-1 outline-none focus:border-blue-500 border-2 border-blue-300 placeholder-gray-300 placeholder-opacity-0 transition duration-200 shadow-nx"
              >
                <option selected>Escolha o tipo do medicamento</option>
                <option value="{comprimido}">Comprimido</option>
                <option value="{capsula}">Cápsula</option>
                <option value="{gel}">Gel</option>
                <option value="{creme}">Creme</option>
                <option value="{xarope}">Xarope</option>
                <option value="{gotas}">Gotas</option>
                <option value="{nasal}">Nasal</option>
                <option value="{oftalmico}">Oftálmico</option>
                <option value="{injetavel}">Injetável</option>
                <option value="{spray}">Spray</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
