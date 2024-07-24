const {Schema,model} = require('../connection');
const mySchema = new Schema({
    
    title : String,
    brand : String,
    password : String,
    category : String,
    createdAt : {type: Date , default : Date.now} 
});
module.exports = model('product',mySchema);
