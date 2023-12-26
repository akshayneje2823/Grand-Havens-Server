import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [4, 'Name should be minimum of 4 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password should be minimum of 8 characters']
    },
    token: {
        type: String
    },
    resetToken: {
        type: String
    }

})


const UserModel = mongoose.model('user', userSchema);
export default UserModel;