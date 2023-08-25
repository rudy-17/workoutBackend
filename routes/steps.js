const express =require ('express');
const router = express.Router();
const {saveSteps,getSteps}=require("../controllers/userController")



router.post("/save",saveSteps)
router.get("/get",getSteps)

module.exports = router;
