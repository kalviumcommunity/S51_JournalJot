const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { login, signup } = require('./Routes/Authserver');
const { startDatabase, isConnected } = require('./Config/Connection');
const { getRouter, postRouter, deleteRouter, putRouter } = require('./Routes/Profile.route');
const { JournalRouter } = require('./Routes/Journal.routes');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Registering routes
app.use('/', login);
app.use('/', signup);
app.use(getRouter);
app.use(postRouter);
app.use(deleteRouter);
app.use("/", putRouter);
app.use(JournalRouter);

// Sample routes
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the amazing world of Journal' });
});

app.get('/home', (req, res) => {
  res.json({
    message: isConnected() ? 'Database is connected' : 'Disconnected from database'
  });
});

app.get('/ping', (req, res) => {
  res.send({ message: 'pong!, Welcome to the amazing world of Journaling' });
});

// Start the database and server
startDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log('Starting Server ....🚀');
      console.log('Server started running on port 3000 🏃‍♂️');
    });
  })
  .catch((error) => {
    console.error('Failed to start the database:', error);
  });
