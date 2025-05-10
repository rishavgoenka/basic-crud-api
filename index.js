const express = require('express');
const connectDB = require('./db');
const travellersRoute = require('./routes/travellers');

const app = express();

connectDB();

app.use(express.json());

app.use('/travellers', travellersRoute);

app.get('/', (req, res) => {
    res.send('Travellers API is running');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});