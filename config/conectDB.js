let mongoose=require("mongoose");
let config=require("config");
let db=config.get("db");
let conectDB=async()=>{
    try {
        await mongoose.connect(db)
        console.log("data base is successfuly conected")
    } catch (error) {
        console.log(error.message)
    }
}
module.exports=conectDB