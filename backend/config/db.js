import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thehiteshwarkaushik:Dwnf9jEDbZggmn2R@cluster0.l2mrcvh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}