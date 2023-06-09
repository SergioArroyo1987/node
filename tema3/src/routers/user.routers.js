const {Router}=require("express");
const router=Router();
const usersCtrl=require("../controller/user.controller");


router.get("/usuario",usersCtrl.getUser);
router.get("/bye",usersCtrl.getBye);




module.exports=router;