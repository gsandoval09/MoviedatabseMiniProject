const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'password',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

app.get("/api/movies", (req,res)=>{
    db.query('SELECT * FROM movies', function (err, results) {
        res.json(results)
      });
      
})

app.post("/api/add-movie", (req,res)=>{
    db.query('SELECT * FROM movies', function (err, results) {
        res.json(results)
      });
      
})
// db.query(`DELETE FROM favorite_books WHERE id = ?`, deletedRow, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Query database
db.query('SELECT * FROM movies', function (err, results) {
  console.log(results);
});

db.query('SELECT * FROM reviews', function (err, results) {
    console.log(results);
  });

  // Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});