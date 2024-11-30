const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.get("/", (req, res) => {
    res.render("login-updated");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error registering user");
        }

        // Here you would typically save the user to the database
        console.log(`User registered: ${username}, Password Hash: ${hash}`);

        // Redirect to login page after successful registration
        res.redirect("/");
    });
});

const port = 5000;
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
