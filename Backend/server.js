const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
