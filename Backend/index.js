const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/todoRoute')
const cors = require('cors')

app.use(bodyParser.json())
app.use('/todo',router)
app.use(cors())



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
