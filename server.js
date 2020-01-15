// Requirements
const express = require('express');
const bodyParser = require('body-parser')

// Definitions
const PORT = process.env.PORT || 8080;

// Create the app
const app = express();

// Apply middleware
app.use(bodyParser.json({ type: 'application/*+json' }))

// Static content
app.use(express.static('static'));

// API
const api = require('./routes/api');
app.use('/api', api);

// Health
const health = require('./routes/health/route');
app.use('/health', health);

// Default
const defaultRoute = require('./routes/defaultRoute');
app.use(defaultRoute);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})