const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")("sk_test_51I4S88AYwRRAGXJ8VdgvH34LpG7nYSgySI2m0OiWpb1ut7zSfguQa57v4q70Y7Q5j9f7xqtDj43LZyokvED7t2u100DC0ccPBv");

// API -- what is needed to set up an API 

//App Config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
//dummy route
app.get('/', (request, response) => response.status(200).send("hello world")) // at root '/'
//app.get('/qazi', (request, response) => response.status(200).send("hello qazi")) //at '/qazi' - http://localhost:5001/challenge-7f24d/us-central1/api/qazi

app.post('/payments/create', async(request, response) => {

    const total = request.query.total; 
    console.log('payment request received - BOOM - for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the current
        currency: "usd",
    });

    // ok - and created something - i.e., payment intent
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

})

//Listen command - the "api" param has an effect on url created
exports.api = functions.https.onRequest(app)

//Example endpoint
//this is what is hits when the / gets called in a get
//http://localhost:5001/challenge-7f24d/us-central1/api