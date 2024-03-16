const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
const routes = require('./routes/routes');

app.use('/api', routes);

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log('Server Running');
  });
});
