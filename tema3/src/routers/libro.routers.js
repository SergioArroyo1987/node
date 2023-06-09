const {Router}=require("express");
const router=Router();

const libroCtrl=require("../controller/libro.controller");
router.get("/libro",libroCtrl.getlibro);
router.post("/libro",libroCtrl.postlibro);
router.put("/libro",libroCtrl.putlibro);
router.delete("/libro",libroCtrl.dellibro);
module.exports=router;