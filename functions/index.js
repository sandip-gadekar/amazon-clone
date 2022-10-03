const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")(
  "sk_test_51Ljp12SDX5fJgiHbAujrfp2FYJ8jqnZYvsBBWDYZD1JdjTdo9Zb8HkxF2hnnqs9WzEbi5lyQp9fA6LklVUTs0xWm00cf0PSNlB"
);
//app confiration
const app = express();

//middleware

app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    
    const total = request.query.total;

    console.log('payment request received of ', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "inr",
    });
    // ok -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listen command
exports.api = functions.https.onRequest(app);

//end point root(/)
//http://localhost:5001/clone-451fa/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
