if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.PORT || 80;
app.use(cors());

app.get('/',(req, res)=>{
    res.json({
        info: 'Hello World',
    });
})

app.get('/secret',(req, res)=>{
    res.json({
        DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    });
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})