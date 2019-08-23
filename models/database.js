const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DemoSchema = new Schema({

user:{
    type:String,
    required: [true, 'name field is required'],
    unique: true
},

password:{
    type: String,
    required: [true, 'Password field is required']
}
})



module.exports = mongoose.model('Demo', DemoSchema)