import mongoose from 'mongoose';

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB successfully')
    }
    catch(err){
        console.log(err)
    }
}

export default connectdb;