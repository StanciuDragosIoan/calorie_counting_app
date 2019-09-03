const express = require('express');

//init app
const app = express();


//define initial server response
app.get('/', (req, res) => {
    res.send({ msg: "Welcome to the calorie counting api" });
});

//define specific routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/meals', require('./routes/meals'));

//define port
const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT, () => console.log(`server started on port ${PORT}`));