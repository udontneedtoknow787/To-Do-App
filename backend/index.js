const express = require('express')
const cors = require('cors')
const mainrouter = require('./routes/index')

const app = express();
app.use(express.json());
app.use(cors());

console.log("server started!");
app.use('/api/v1', mainrouter);

app.listen(3000);