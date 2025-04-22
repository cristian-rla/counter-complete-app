'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const handleSubmit = () =>{
    setResult(null)
    setError("")
    if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))){
      setResult(null)
      setError("Ingrese una entrada válida")
      return;
    }
    if (Number(num1) < 0 || Number(num2) < 0 ){
      setError("No se manejan numeros negativos")
      return;
    }
    if(operator == "div" && Number(num2) == 0){
      setError("No se puede dividir entre 0");
      return;
    }
    fetch(`http://localhost:3001/api/operacion?num1=${num1}&num2=${num2}&opp=${operator}`)
    .then(res => res.json())
    .then(data => {setResult(data.result)});
    
  };

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("sum");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="self-center flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="text-2xl mt-3 mb-3 font-semibold text-black m-auto">Calculadora (cliente-Servidor)</div>

      <div className="flex flex-col m-auto">
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="p-2 border rounded border-gray-500 text-black"
            placeholder="Número 1"
          />
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="p-2 border rounded border-gray-500 text-black"
          >
            <option value="sum">+</option>
            <option value="sub">-</option>
            <option value="mul">×</option>
            <option value="div">÷</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="p-2 border rounded border-gray-500 text-black"
            placeholder="Número 2"
          />
        </div>
        <button
          onClick={handleSubmit} //CAMBIAR AQUI
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Calcular
        </button>

        <div className="mt-4 text-lg font-semibold text-black m-auto">
          {result !== null && result !== undefined && <span>Resultado: {result}</span>}
          {error && <span className="text-red-500">Error: {error}</span>}
        </div>
      </div>
    </div>
  );
}
