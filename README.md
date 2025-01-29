# Stripe Payment Gateway Integration

This project demonstrates how to integrate Stripe's payment gateway with a Node.js and Express.js application. It provides a simple checkout process where users can purchase items and complete payments securely.

## Features
- Uses **Stripe Checkout Sessions** for seamless payment processing.
- Supports multiple currencies and payment methods.
- Collects shipping addresses for select countries.
- Provides success and cancellation pages.
- Uses **EJS** for rendering the checkout page.
- Logs requests using **Morgan** middleware.

## Installation

### Prerequisites
- Node.js installed on your system.
- A Stripe account with API keys.

### Clone the Repository
```sh
git clone https://github.com/yourusername/stripe-payment-gateway.git
cd stripe-payment-gateway
```

### Install Dependencies
```sh
npm install
```

## Configuration
1. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   BASE_URL=http://localhost:3000
   ```
2. Replace `your_stripe_secret_key` with your actual Stripe Secret Key from the Stripe Dashboard.

## Running the Application
Start the server with:
```sh
node index.js
```
The application will be available at `http://localhost:3000`.

## Project Structure
```
stripe-payment-gateway/
│-- views/
│   ├── index.ejs  # Frontend checkout page
│-- index.js       # Main application file
│-- package.json   # Project dependencies
│-- .env           # Environment variables
```

## Endpoints
| Method | Endpoint     | Description |
|--------|-------------|-------------|
| GET    | `/`         | Renders the shopping cart page |
| POST   | `/checkout` | Creates a Stripe checkout session and redirects the user |
| GET    | `/complete` | Handles successful payments and retrieves payment details |
| GET    | `/cancel`   | Redirects back to the home page after payment cancellation |

## How It Works
1. The user visits `/` and sees a shopping cart.
2. Clicking the "Proceed to Checkout" button sends a POST request to `/checkout`.
3. The app creates a Stripe checkout session and redirects the user to Stripe's payment page.
4. After a successful payment, the user is redirected to `/complete`.
5. If the payment is canceled, the user is redirected to `/cancel`.

## Dependencies
- `express`: Web framework for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.
- `stripe`: Stripe API for handling payments.
- `ejs`: Template engine for rendering views.
- `morgan`: HTTP request logger.

## Future Enhancements
- Add database integration for order storage.
- Implement user authentication.
- Support multiple products dynamically.

## License
This project is licensed under the MIT License.

