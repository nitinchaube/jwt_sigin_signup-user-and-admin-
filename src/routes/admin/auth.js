const express=require("express");
const { signup , signin, requiresignin} = require("../../controller/admin/auth");
const router=express.Router();




router.post("/adminsignin",signin);

router.post("/adminsignup",signup);



module.exports=router;