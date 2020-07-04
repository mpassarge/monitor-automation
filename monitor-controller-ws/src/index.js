const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ "hello": "world" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});