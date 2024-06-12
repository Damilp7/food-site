import mongoose from "mongoose";


export const connectDB = async () => {
await mongoose.connect('mongodb+srv://ayoolapeter001:Rixusprime57@cluster0.mh0ahmo.mongodb.net/food-site').then(()=>console.log('Database connected successfully'));
}