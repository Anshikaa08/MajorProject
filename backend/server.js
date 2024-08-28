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

app.post('/add-crud', (req, res) => {
    const { aadharno, phone } = req.body;
    const sql = 'INSERT INTO crud (aadhar, phone) VALUES (?, ?)';
    db.query(sql, [aadharno, phone], (err, result) => {
        if (err) {
            console.error('Error inserting into crud table:', err);
            return res.status(500).json("Failed to add to crud table");
        }
        res.status(200).json("Crud details added successfully");
    });
});

// Route to add data to `user` table

// Start the server
app.listen(8081, () => {
    console.log('Server running on port 8081');
});
