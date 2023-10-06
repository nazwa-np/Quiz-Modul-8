const express = require("express")
const app = express()
const {body, validationResult} = require("express-validator")
const registerValidator = require('./middleware/register-validator')

app.use(express.json())


app.post('/auth/register', registerValidator, (req,res) => {
    
    const validateResult = validationResult(req);
    if(!validateResult.isEmpty()) {
        return res.status(400).json({
            status: "failed",
            message: "Validation Eror",
            eror: validateResult.array()
      })
    }

    const body = req.body;
    return res.status(200).json({
        status: "succes",
        message: "Register Berhasil",
        data: body
    })
})

app.listen(3500, ()=> {
    console.log(`app start at http://localhost:3500`)
})