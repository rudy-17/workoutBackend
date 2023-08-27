const express =require ('express');
const router = express.Router();
const {saveSteps,getSteps,deleteAll,verifyToday}=require("../controllers/userController")



router.post("/save",saveSteps)
router.get("/get",getSteps)
router.get("/deleteAll",deleteAll)
router.post("/verify",verifyToday)

module.exports = router;
