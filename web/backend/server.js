require('dotenv').config()
const express = require('express')
const productGroupsRoutes = require('./routes/productGroup')
const sqlite3 = require('sqlite3').verbose()

// express app 
const app = express()

// connect to db 

// const db = new sqlite3.Database('../database/test.db' , sqlite3.OPEN_READWRITE , (err) => {if (err) return console.log(err.message);})

// close connection to db 

// db.close((err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });

// middleware
app.use(express.json())
app.use( (req,res,next) => {
    console.log(req.path, req.method);
    next()
})

// routes 
app.use('/api/productgroups',productGroupsRoutes)

// connect to db (for now - already connected )



// listening for requests 
app.listen(process.env.PORT, () => {
    console.log('listening on port');
})

