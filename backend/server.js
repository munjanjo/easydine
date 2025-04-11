import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "strojnica123",
  database: "EasyDine",
});

const salt = 5;

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json("ERROR");
    const values = [req.body.name, req.body.email, hash];
    db.query(sql, [values], (err, result) => {
      if (err) {
        console.error("SQL Query Error:", err.message);
        console.error("SQL Query:", sql);
        console.error("Values:", values);
        return res.status(500).json({ error: "Database error" });
      }
      return res.status(201).json({
        message: "User created successfully",
        result,
        email: req.body.email,
      });
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, [req.body.email], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ Error: "Internal server error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ Error: "Email not found" });
    }

    bcrypt.compare(
      req.body.password.toString(),
      result[0].password,
      (err, response) => {
        if (err) {
          console.error("Bcrypt error:", err.message);
          return res.status(500).json({ Error: "Internal server error" });
        }
        if (response) {
          return res
            .status(200)
            .json({ Status: "Success", email: req.body.email });
        } else {
          return res.status(401).json({ Error: "Wrong password" });
        }
      }
    );
  });
});

app.post("/reserve", (req, res) => {
  const sql =
    "INSERT INTO reservations (`name`, `surname`, `email`, `phone_number`, `number_of_people`, `preorder`, `date`, `table`, `restaurant`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.surname,
    req.body.email,
    req.body.phoneNumber,
    req.body.numOfPeople,
    req.body.preorder,
    `${req.body.date} ${req.body.time}`,
    req.body.table,
    req.body.restaurant,
  ];
  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error("SQL Query Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    return res
      .status(201)
      .json({ message: "Reservation created successfully", result });
  });
});

app.get("/reservations", (req, res) => {
  const userEmail = req.query.email;

  if (!userEmail) {
    return res.status(400).json({ error: "Email parameter is required" });
  }

  const sql = "SELECT * FROM reservations WHERE email = ?";
  db.query(sql, [userEmail], (err, result) => {
    if (err) {
      console.error("SQL Query Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    return res.status(200).json({ message: "Reservations", result });
  });
});

app.get("/users", (req, res) => {
  const userEmail = req.query.email;

  if (!userEmail) {
    return res.status(400).json({ error: "Email parameter is required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [userEmail], (err, result) => {
    if (err) {
      console.error("SQL Query Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    return res.status(200).json({ message: "User information", result });
  });
});

app.delete("/reservations/:id", (req, res) => {
  const reservationId = req.params.id;
  const sql = "DELETE FROM reservations WHERE id = ?";
  db.query(sql, [reservationId], (err, result) => {
    if (err) {
      console.error("SQL Query Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    return res
      .status(200)
      .json({ message: "Reservation cancelled successfully" });
  });
});

app.put("/information/:id", (req, res) => {
  const reservationId = req.params.id;
  const { name, password } = req.body;

  // Update user name
  let sql = "UPDATE users SET name = ? WHERE id = ?";
  const values = [name, reservationId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("SQL Query Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }

    // If password is provided, hash and update it
    if (password) {
      bcrypt.hash(password.toString(), salt, (err, hash) => {
        if (err) {
          console.error("Bcrypt error:", err.message);
          return res.status(500).json({ error: "Internal server error" });
        }

        const updatePasswordSql = "UPDATE users SET password = ? WHERE id = ?";
        db.query(updatePasswordSql, [hash, reservationId], (err) => {
          if (err) {
            console.error("SQL Query Error:", err.message);
            return res.status(500).json({ error: "Database error" });
          }
          return res
            .status(200)
            .json({ message: "Information updated successfully" });
        });
      });
    } else {
      return res.status(200).json({ message: "Name updated successfully" });
    }
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
