const moongoose = require("mongoose");
const UserSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    work: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }

})

const users = new moongoose.model("users", UserSchema);

module.exports = users;