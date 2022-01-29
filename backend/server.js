const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
//connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.get('/', (req, res) => {
  res.json({ message: 'Hello from node express' });
});

app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Serever started on ${PORT}`));
