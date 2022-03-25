const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

// middelware
app.use(express.static("./"));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/html/index.html')
})


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})