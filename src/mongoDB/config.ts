import mongoose from 'mongoose';
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://hichem:hichem123456@cluster0.0fysabr.mongodb.net/?retryWrites=true&w=majority')
        console.log('DB is connected...');
    } catch (error) {
        console.log('DB is not connected');
    }
}
export default connectDB;