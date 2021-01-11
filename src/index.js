const express = require('express');
const app = express();

//Route
app.get('/', (req, res, next) => {
    res
        .status(200)
        .json({ message: 'hello world!!!', app: 'natours' });
});

//Listen Port
const port = 3000;
app.listen(port, () => {
    console.log('Start in port 3000');
});