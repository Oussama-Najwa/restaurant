const express = require('express')
const db=require('./model/index')
const cors = require('cors')
const app = express();
const menuRoute = require('./route/menuRoute');
app.use(express.json());

app.use(cors());
app.use('/menu',menuRoute);

const PORT = 8800
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})