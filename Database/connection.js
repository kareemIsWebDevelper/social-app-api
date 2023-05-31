// Connect to mongodb
var mongoose = require('mongoose');

const url = "mongodb+srv://kareem:7410@cluster0.mwlkotc.mongodb.net/Social?retryWrites=true&w=majority";

options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true 
}

mongoose.connect(url, options)
.then((res) => console.log("Connected"))
.catch((error) => console.log(error));
 
module.exports = mongoose;
