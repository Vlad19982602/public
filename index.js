// mongodb+srv://triplej2nd:bRBUgKsQNeLAh18H@cluster0.qbgfnpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://triplej2nd:<password>@cluster0.qbgfnpa.mongodb.net/


import e from 'express';
// import mongoose from 'mongoose';
// import { MongoClient } from 'mongodb';

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
    console.log(`sTART ${PORT}`)
})