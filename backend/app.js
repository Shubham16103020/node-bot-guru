// app.js
const express = require('express');
const app = express();
const config = require('./config/config');
const indexRouter = require('./routes/index');
const botRouter = require('./routes/bot');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);
app.use('/bot', botRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

// Start Server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
