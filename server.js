const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;


app.get('/', (req, res) =>{
    res.sendFile('../html/index.html')
})


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})