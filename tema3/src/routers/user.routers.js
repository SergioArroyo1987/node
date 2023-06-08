const {Router}=require("express");
const router=Router();
const usersCtrl=require("../controller/user.controller");
const libroCtrl=require("../controller/book.controller");

router.get("/usuario",usersCtrl.getUser);
router.get("/bye",usersCtrl.getBye);
router.get("/book",libroCtrl.getbook);
router.post("/book",libroCtrl.postbook);
router.put("/book",libroCtrl.putbook);
router.delete("/book",libroCtrl.delbook);



module.exports=router;