let express=require("express")
const conectDB = require("./config/conectDB")
let app=express()
const User=require("./models/user")

conectDB()

app.use(express.json())
// add user
app.post("/user/post",async(req,res)=>{
    let{
        name,email,number,password
    }=req.body
    try {
        let newuser=User({
            name,email,number,password
        })
        await newuser.save()
        res.send(newuser)
        
    } catch (error) {
        console.log(error.message)
    }
});
//delete

app.delete("/user/delete/:id",async(req,res)=>{
    try {
        let deletedUser=await User.findByIdAndDelete(req.params.id)
        res.send("user is deleted")
    } catch (error) {
        console.log(error.message)

    }
});
// get users
app.get("/user/get",async(req,res)=>{
    try {
        let users= await User.find()
        res.send(users)
    } catch (error) {
        console.log(error.message)
    }
});

// get user by id
app.get("/user/get/:id",async(req,res)=>{
    try {
        let theUser=await User.findById(req.params.id)
        res.send(theUser)
    } catch (error) {
        console.log(error.message)
    }
});

//edit
app.put("/user/edit/:id",async(req,res)=>{
    try {
        let editedUser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true});
        res.send(editedUser)
    } catch (error) {
        console.log(error.message)
    }
})



let PORT=process.env.PORT||6000 
app.listen(PORT,error=>error?console.log(error):console.log("server is running "))