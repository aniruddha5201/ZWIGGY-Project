import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://aniruddharaut014:12345@cluster0.p9fqthb.mongodb.net/').then((conn)=>console.log(`Database Connected ${conn.connection.host}`))
    // try{
    //     const conn = await mongoose.connect('mongodb+srv://aniruddharaut014:12345@cluster0.p9fqthb.mongodb.net/');
    //     console.log(`Database connected ${conn.connection.host}`);
    // }catch(err){
    //     console.log(err);
    // }
}
