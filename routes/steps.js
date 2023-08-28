const express =require ('express');
const router = express.Router();
const {saveSteps,getSteps,deleteAll,verifyToday,analytics}=require("../controllers/userController")



router.post("/save",saveSteps)
router.get("/get",getSteps)
router.get("/deleteAll",deleteAll)
router.post("/verify",verifyToday)
router.post("/analytics",analytics)

module.exports = router;
