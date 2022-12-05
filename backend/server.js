const express = require("express")
require('dotenv').config()

const app = express();


app.get("/api", (req, res) => {
    res.json({ data: "Hello from server!" })
});


var PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log("Server started");
})