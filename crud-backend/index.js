
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("Hello World at 3000");
})

app.get('/' ,(req,res) =>  {
    res.send("Hellow from node API")
})