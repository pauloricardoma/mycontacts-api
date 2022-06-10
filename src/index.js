const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json()); // para receber requisições com o body
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));
