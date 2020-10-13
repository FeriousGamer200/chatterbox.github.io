// Importing Express Framework
const express = require('express');
// Creating an Express Instance
var app = express();

// Tell express to serve the desired static files on this instance
app.use(express.static(__dirname));

// Create a server event on port 3000
var server = app.listen(3000, ()=>{
    console.log("Server is running on 127.0.0.1:", server.address().port);
});
