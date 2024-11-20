const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Built-in body parser

// Routes
app.use('/api/auth', authRoutes);

// Root Route (for testing or as a placeholder)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
