import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect('mongodb+srv://shrutiautomation:oOxqX4zx4r4RRHNZ@cluster0.eb86xla.mongodb.net/?retryWrites=true&w=majority')
    return handler(req, res)
}

export default connectDB;