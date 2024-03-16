const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const db = require('./models');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
