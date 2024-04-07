// mongodb+srv://triplej2nd:bRBUgKsQNeLAh18H@cluster0.qbgfnpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://triplej2nd:<password>@cluster0.qbgfnpa.mongodb.net/


import e from 'express';
// import mongoose from 'mongoose';
// import { MongoClient } from 'mongodb';

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://triplej2nd:bKBUgKsQNeLAh18H@cluster0.qbgfnpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const app = e();
const PORT = process.env.PORT || 5000;

// async function start() {
//     try {
//         await MongoClient.connect('mongodb+srv://triplej2nd:bKBUgKsQNeLAh18H@cluster0.qbgfnpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

//         app.listen(PORT, () => {
//             console.log(`sTART ${PORT}`)
//         })
//     } catch (err) {console.error(err)}
// }
// start();

app.listen(PORT, () => {
    console.log(`Start ${PORT}`)
})