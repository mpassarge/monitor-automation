const express = require('express');
const morgan = require('morgan');
const registrationRoutes = require('./routes/registrationRoute');
const monitorRoutes = require('./routes/monitorsRoute');
const configurationRoutes = require('./routes/configurationRoute');
const app = express();

app.use(morgan('common'));
app.use(express.json());

app.use('/registrations', registrationRoutes);
app.use('/monitors', monitorRoutes); // TODO: Might remove.. Revisit
app.use('/configurations', configurationRoutes);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});