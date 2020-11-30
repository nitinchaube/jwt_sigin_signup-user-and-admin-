const express= require("express");
const app=express();
const env=require("dotenv");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
//Routes
const userRoutes=require("./routes/auth");
const adminRoutes=require("./routes/admin/auth");


//for environment variables
env.config();


//Middlewares
app.use(bodyParser());
app.use("/api",userRoutes);
app.use("/api",adminRoutes);





//mongodb conections
//mongodb+srv://nitin:<password>@cluster0.d9wgv.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.d9wgv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true
    }
).then(()=>{
    console.log("connection successfull")
});







app.listen(process.env.PORT , () => {
    console.log(`server is running on port ${process.env.PORT}`)
})