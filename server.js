require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectToDb = require('./config/db');

const PORT = process.env.PORT || 8080;
const server = createServer(app);

connectToDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}. MongoDB connected!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });