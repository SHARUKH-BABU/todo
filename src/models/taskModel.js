import mongoose, {Schema} from 'mongoose';

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }, 
    
    {
        timestamps: true
    }); 
   

const Topic =  mongoose.models.Task || mongoose.model('Task', schema);

export default Topic;