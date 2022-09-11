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


//Create users database.
const usersDatabase = new Database ('./src/database/users.db')



//User login endpoint.
app.post('/users', ((req, res) => {
  const query = usersDatabase.prepare('SELECT * FROM users WHERE email= ?')
  const user = query.get(req.body.email);

  const result = !user
    ?{
      success: false,
      errorMessage: 'Este email no está registrado'
    }
    :user.password !== req.body.password
      ? { 
      success: false,
      errorMessage: 'La contraseña introducida es incorrecta'
      }
      :{ 
        success: true,
        userId: user.id
        }
  //If not, save data in db.
  // const result = user
  //   ?{
  //     success: false,
  //     errorMessage: 'El email que has usado ya está registrado'
  //   }
  //   :{ 
  //     success: true,
  //     userId: querySave.run(req.body.email, req.body.password).lastInsertRowid
  //   };

  res.json(result);
}))




//Static servers.
const staticServerPath = './src/public-react';
app.use(express.static(staticServerPath));