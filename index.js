require('dotenv').config();
const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
app.set('view engine', 'ejs');
var morgan = require('morgan')
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`,
        //start that's will be shown in the checkout page
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Node.js and Express book',
                    },
                    unit_amount: 50 * 100,
                },
                quantity: 2,
            },
        ],
        //end that's will be shown in the checkout page
        mode: 'payment',// or 'subscription'

        //additional information
        shipping_address_collection: {
            allowed_countries: ['US', 'GB', 'CA', 'IN'],
        },
    });
    res.redirect(session.url);
});


app.get('/complete', async(req, res) => {
    const result = Promise.all([
        stripe.checkout.sessions.retrieve(req.query.session_id, {expand: ['payment_intent.payment_method'],}),
        stripe.checkout.sessions.listLineItems(req.query.session_id )
    ]);
    console.log(JSON.stringify(await result));    
    res.send('Payment success');
});


app.get('/cancel', (req, res) => {
    res.redirect('/');
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});