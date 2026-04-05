// Load dotenv to read the .env file
require('dotenv').config();

const express = require('express');
const path = require('path');

// Load our Router
const courseRoutes = require('./src/routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));

// Use our route
app.use('/', courseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});