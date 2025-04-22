const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.get("/api/operacion", async (req, res) => {
    try{
    const {num1, num2, opp} = req.query;
    const a = Number(num1);
    const b = Number(num2);
    console.log(a,b,opp)
    let opResult;
    if (a < 0 || b < 0){
        throw new Error(`Parámetro ${(a<0 && b<0)*"s"} ${(a<0)*String(a)+","*(a<0 && b<0) + (b<0)*String(b) + (a<0 && b<0)? "son negativos": "es negativo"}`)
    }
    switch (opp){
        case "sum":
            opResult = a + b;
            break;
        case "sub":
            opResult = a - b;
            break;
        case "div":
            if (b == 0){
                throw new Error("No se puede dividir entre cero");
            }
            opResult = a / b;
            break;
        case "mul":
            opResult = a * b;
            break;
    }
    res.status(200).json({result: opResult});
    }  catch(error){
        res.status(500).json({message:error.message})
    }
});

PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("Escuchando en el puerto " + PORT))