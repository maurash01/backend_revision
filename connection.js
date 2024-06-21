const mongoose = require('mongoose');

const url="mongodb+srv://ashumaurya023:1234@cluster0.eoqnnzn.mongodb.net/revisiondatabase?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose ;