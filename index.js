const express = require('express');
const connectDB = require('./db');
const travellersRoute = require('./src/routes/travellerRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/travellers', travellersRoute);

app.get('/', (req, res) => {
    res.send(`
        <h2>basic crud api endpoints</h2>
        GET - <a href="/travellers">localhost:3000/travellers</a> → fetch all users<br />
        POST - localhost:3000/travellers → create user<br />
        <pre>
{
    "name": "",
    "age": ,
    "email": ""
}</pre><br />
        PUT - localhost:3000/travellers/:id → update user details<br />
        DELETE - localhost:3000/travellers/:id → delete user<br />
    `);
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});