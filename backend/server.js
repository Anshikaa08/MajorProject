import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anshps08#',
    database: 'diginet'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        process.exit(1); // Exit the process if database connection fails
    }
    console.log('Connected to database.');
});

// Login route
app.post('/login', (req, res) => {
    console.log('Login request received:', req.body); // Added logging
    const sql = "SELECT * FROM crud WHERE aadhar = ? AND phone = ?";
    const values = [req.body.aadhar, req.body.phone];
    
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json("Login Failed");
        }
        if (data.length > 0) {
            console.log("result matched")
            return res.json(data);
        } else {
            return res.status(404).json("No matching records found");
        }
    });
});
////adduserdetails
app.post('/admin',(req,res)=>{
    console.log('Login request recieved:',req.body);
    const sql="SELECT * FROM admin WHERE username=? AND password=?";
    const values=[req.body.username, req.body.password];

    db.query(sql,values,(err,data)=>{
        if(err){
            console.log('Error executing query:',err);
            return res.status(500).json("Login Failed");
        }
        if(data.length>0){
            console.log("result matched");
            return res.json(data);
        }
        else{
            return res.status(404).json("No matching records found");
        }
    });
});

//add details of user through admin

app.post('/add-details', (req, res) => {
    console.log('Request body:', req.body); // Log the request body
    const { aadhar, phone } = req.body;
    const query = 'INSERT INTO crud (aadhar, phone) VALUES (?, ?)';
    const values = [aadhar, phone];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting into crud table:', err);
            res.status(500).send("Failed to add to crud table");
        } else {
            console.log('Insert result:', result); // Log the result
            res.status(200).send("Crud details added successfully");
        }
    });
});

app.post('/add-user-details', (req, res) => {
    const { Username, Name, Date_Of_Birth, Aadhaar_Number, Phone_Number, Password, Gender, Address, Country } = req.body;
    
    const query = 'INSERT INTO users (Username, Name, Date_Of_Birth, Aadhaar_Number, Phone_Number, Password, Gender, Address, Country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [Username, Name, Date_Of_Birth, Aadhaar_Number, Phone_Number, Password, Gender, Address, Country];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting user details:', err);
            return res.status(500).send("Failed to add user details");
        }
        res.status(200).send("User added successfully");
    });
});

//delete user

  

// app.delete('/DeleteUser', (req, res) => {
//     const { aadhar, phone } = req.body;
  
//     const query = 'DELETE FROM crud WHERE aadhar = ? AND phone = ?';
//     const query1 = 'DELETE FROM users WHERE aadhar = ? AND phone = ?';
//     db.query(query, [aadhar, phone], (err, result) => {
//       if (err) {
//         console.error('Error deleting user:', err);
//         return res.status(500).send('Server error');
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).send('User not found');
//       }
//       res.send({ message: 'User deleted successfully' });
//     });
//   })

app.delete('/DeleteUser', (req, res) => {
    const { aadhar, phone } = req.body;
  
    const queryCrud = 'DELETE FROM crud WHERE aadhar = ? AND phone = ?';
    const queryUsers = 'DELETE FROM users WHERE Aadhaar_Number = ? AND Phone_Number = ?';
  
    // Delete from the first table
    db.query(queryCrud, [aadhar, phone], (err, result) => {
      if (err) {
        console.error('Error deleting user from crud table:', err);
        return res.status(500).send('Server error');
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).send('User not found in crud table');
      }
  
      // If deletion from the first table is successful, delete from the second table
      db.query(queryUsers, [Aadhar_Number, Phone_Number], (err, result) => {
        if (err) {
          console.error('Error deleting user from users table:', err);
          return res.status(500).send('Server error');
        }
  
        if (result.affectedRows === 0) {
          return res.status(404).send('User not found in users table');
        }
  
        res.send({ message: 'User deleted successfully from both tables' });
      });
    });
  });
  
  //delete from users table

  


// Route to add data to `user` table

// Start the server
app.listen(8081, () => {
    console.log('Server running on port 8081');
});
