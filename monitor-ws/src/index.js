const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

app.use(morgan('common'));

app.use('/monitors', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});