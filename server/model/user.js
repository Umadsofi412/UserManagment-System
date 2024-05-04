import { Schema,model } from "mongoose";
const userSchema = new Schema({
    firstName:{
        type: 'string',
        require: true
    },
    lastName:{
        type: 'string',
        required: true
    }
})

const userModel =  model('user',userSchema);

export default userModel;