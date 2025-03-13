const express = require('express');
const app = express();

app.get("/api/operacion", (req, res) => {
    const {num1, num2, opp} = req.query;
    let opResult;
    switch (opp){
        case "+":
            opResult = num1 + num2;
            break;
        case "-":
            opResult = num1 - num2;
            break;
        case "/":
            opResult = num1 / num2;
            break;
        case "*":
            opResult = num1 * num2;
            break;
    }
    res.json({result: opResult});

});

app.listen(3000)