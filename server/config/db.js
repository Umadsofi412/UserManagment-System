import mongoose from 'mongoose';
import {connect} from  'mongoose';

mongoose.set('strictQuery',false);


const connetdb = async() => {
    try{
        const conn = await
        connect(process.env.DATABASE_URI)
        console.log('successfully Connected with database' + conn.connection.host)
    }catch (e){

    }
}

export default connetdb;