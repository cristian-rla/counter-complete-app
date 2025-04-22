const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.get("/api/operacion", async (req, res) => {
    const {num1, num2, opp} = req.query;
    const a = Number(num1);
    const b = Number(num2);
    console.log(a,b,opp)
    let opResult;
    switch (opp){
        case "sum":
            opResult = a + b;
            break;
        case "sub":
            opResult = a - b;
            break;
        case "div":
            opResult = a / b;
            break;
        case "mul":
            opResult = a * b;
            break;
    }
    console.log(opResult);
    res.status(200).json({result: opResult});

});

PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("Escuchando en el puerto " + PORT))