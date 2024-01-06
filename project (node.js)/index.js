const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(userRoutes);

app.listen(port, () => {
    console.log(`listining on port ${port}`);
});
