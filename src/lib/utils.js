import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};



// import mongoose from "mongoose"

// const connection = {};

// export const connectToDb = async () => {
//   let db = [];
//   try {
//      db = await mongoose.connect(process.env.MONGO_URI);
    
  
//     // connection.isConnected = db.connections[0].readyState;
   
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }

// };



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Sirmehrdad:Daee5264845@accounting.z6bun8v.mongodb.net/sirmehrdadbase?retryWrites=true&w=majority&appName=accounting";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function connectToDb() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("accounting").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// connectToDb().catch(console.dir);

