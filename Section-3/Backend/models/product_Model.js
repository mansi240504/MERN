const {Schema, mode } = require('../Connection');


const mySchema= new Schema({
    name :String,
    brand : {type: String,require: true ,unique: true},
    image : {type: String,require: true ,unique: true},
    price : {type: Number, require:true },
    createdAt: { type: Date,default: Date.now}
})

 module.exports= model('product',mySchema); //this is a collection name  jabtak call nhi krenge tabtak model nhi banega
