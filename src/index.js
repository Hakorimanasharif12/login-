const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine','ejs');

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("login-updated");
}
);
app.get("/signup", (req,res)=>{
    res.render("signup");
});




const port = 5000;
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})
