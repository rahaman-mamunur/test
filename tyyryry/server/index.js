const express = require('express');
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const cors = require('cors')
const app = express();
const dotenv=require('dotenv')
const port = 3000;


app.use(cors())
dotenv.config();


const PORT = process.env.PORT || 7000;


const MONGOURL = process.env.MONGO_URL || "mongodb://localhost:27017/tester"; 


// with mongoose 

/*
mongoose.connect(MONGOURL)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));


app.get('/', (req, res) => {
  res.send('Hello, MongoDB with Express!');
});


app.get('/ok', (req, res) => {
  res.send('Hello, Express!');
});


const userSchema = new mongoose.Schema({

    name : String,
    age : Number,  
})

const userModel = mongoose.model('users',userSchema)

app.get('/getUsers' , async(req,res)=>{

  const userData = await userModel.find()
  res.json(userData); 
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
*/



// without mongoose 

let dbClient;

// Connect to MongoDB
// MongoClient.connect(MONGOURL)
//   .then((client) => {
//     console.log("Connected to MongoDB successfully.");
//     dbClient = client;

//     // Create a collection instance
//     const db = dbClient.db("tester")
//     const usersCollection = db.collection("users"); 

 
//     app.get("/users", async (req, res) => {
//       try {
//         const users = await usersCollection.find().toArray();
//         res.json(users);
//       } catch (err) {
//         res.status(500).send("Error fetching users");
//       }
//     });


//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });



  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });