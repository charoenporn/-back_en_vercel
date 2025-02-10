const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;
const HOSTNAME = 'localhost'
const cors = require('cors')
app.use(cors())
app.use(express.json())
const bodyParser = require('body-parser');
app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.json({
        "Name":"project lab 4",
        "Author":"Charoenporn Bouyam",
        "APIs":[
            {"api_name":"/getDoctors/","method":"get"},
            {"api_name":"/getDoctor/:id","method":"get"},
            {"api_name":"/addDoctor/","method":"post"},
            {"api_name":"/editDoctor/","method":"put"},
            {"api_name":"/editDoctor/","method":"delete"},
        ]
    });
});
app.get('/test',(req,res)=>{
    res.json({
        "TEST":"hello test"
    })
})