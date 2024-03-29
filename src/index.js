const express = require("express");
const cors = require("cors");

const Database = require("better-sqlite3");
// const db = new Database(./src/database)

//Server config.
const app = express();
app.use(cors());

app.use(express.json({ limit: "10mb" }));

const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Template engine.
app.set("view engine", "ejs");

//Create users database.
const db = new Database("./src/database/database.db");

//User login endpoint.
app.post("/api/users", (req, res) => {
  const query = db.prepare("SELECT * FROM users WHERE email= ?");
  const user = query.get(req.body.email);
  console.log(user);
  console.log(req.body.email);
  const result =
    user && user.password === req.body.password
      ? { success: true, userId: user.id }
      : user && user.password !== req.body.password
      ? {
          success: false,
          errorMessage: "La contraseña introducida es incorrecta",
        }
      : { success: false, errorMessage: "Este email no está registrado" };

  res.json(result);
});

//User signup endpoint.
app.post("/api/sign-up", (req, res) => {
  const checkQuery = db.prepare("SELECT * FROM users WHERE email= ?");
  const user = checkQuery.get(req.body.email);

  const query = db.prepare(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
  );

  if (user) {
    const result = {
      success: false,
      errorMessage: "La dirección de correo electrónico ya ha sido registrada.",
    };
    console.log(result);
    return res.json(result);
  } else {
    const result = query.run(req.body.name, req.body.email, req.body.password);
    //result.changes;
    console.log(result.lastInsertRowid);
    res.json({
      success: true,
      userId: result.lastInsertRowid,
    });
  }
});

//Get user info
app.get("/api/user/:userId", (req, res) => {
  console.log("devolviendo datos usuario");

  const query = db.prepare("SELECT * FROM users WHERE id = ?");
  const result = query.get(req.params.userId);

  res.json(result);
});

app.post("/api/users", (req, res) => {
  const query = db.prepare("SELECT * FROM users WHERE email= ?");
  const user = query.get(req.body.email);

  const result = !user
    ? {
        success: false,
        errorMessage: "Este email no está registrado",
      }
    : user.password !== req.body.password
    ? {
        success: false,
        errorMessage: "La contraseña introducida es incorrecta",
      }
    : {
        success: true,
        userId: user.id,
      };

  res.json(result);
});

//Get all plants
app.get("/api/plants", (req, res) => {
  //console.log("devolviendo plantas");
  const query = db.prepare("SELECT * FROM plants");
  const result = query.all();
  //console.log(result);

  res.json(result);
});

//Save user plants
app.post("/api/user-plants", (req, res) => {
  console.log("Recibiendo datos de plantas de usuario");

  const checkQuery = db.prepare("SELECT * FROM user_info WHERE plantId = ?");
  const checkResult = checkQuery.get(req.body.plantId);

  const insertQuery = db.prepare(
    "INSERT INTO user_info (plantId, userId) VALUES (?, ?)"
  );
  const deleteQuery = db.prepare("DELETE FROM user_info WHERE plantId = ? ");
  console.log(checkResult);

  const result = checkResult
    ? deleteQuery.run(req.body.plantId)
    : insertQuery.run(req.body.plantId, req.body.userId);

  console.log(result);
  res.json(result);
});

//Get user plants
app.get("/api/user/:userId/plants", (req, res) => {
  console.log("devolviendo plantas del usuario");
  console.log(req.params.userId);
  const query = db.prepare("SELECT plantId FROM user_info WHERE userId = ?");
  const result = query.all(req.params.userId);
  const userPlantsIds = result.map((item) => item.plantId);

  const plantsInfoQuery = db.prepare("SELECT * FROM plants WHERE id = ?");
  const userPlantsInfo = userPlantsIds.map((id) => plantsInfoQuery.get(id));

  res.json(userPlantsInfo);
});

//Static servers.
const staticServerPath = "./src/public-react";
app.use(express.static(staticServerPath));
