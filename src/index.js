const express = require('express');
const cors = require('cors');

const Database = require('better-sqlite3');
// const db = new Database(./src/database)


//Server config.
const app = express();
app.use(cors());

app.use(express.json({ limit: '10mb' }));

const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});



//Template engine.
app.set('view engine', 'ejs');







//Static servers.
const staticServerPath = './src/public-react';
app.use(express.static(staticServerPath));