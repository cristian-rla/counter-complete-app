'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  return (
<div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="self-center flex gap-2 mb-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="p-2 border rounded border-gray-500"
          placeholder="Número 1"
        />
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="p-2 border rounded border-gray-500 text-black"
        >
          <option className ="" value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="p-2 border rounded border-gray-500"
          placeholder="Número 2"
        />
      </div>
      <button
        onClick={undefined} //CAMBIAR AQUI
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Calcular
      </button>
      <div className="mt-4 text-lg font-semibold">
        {result !== null && <p>Resultado: {result}</p>}
      </div>
    </div>
  );
}
