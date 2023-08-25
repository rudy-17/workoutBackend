
const express =require ('express');
const UserSteps=require("../models/userStep")

const saveSteps = async (req, res) => {
    try {
      console.log("steps");
      console.log(req.body);
      url=req.body.url 
      steps=req.body.steps
      datee=req.body.date

      if(url.includes("rudresh")){
        username="rudresh"
      }
      else{
        username="paridhi"
      }
       
      const newStepsEntry = new UserSteps({
        username,
        steps,
        datee
      });
      await newStepsEntry.save();
       
     res.json({ message: 'Steps data saved' });
      
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: 'Error saving steps data' });
      
    }
  };

  const getSteps=async (req,res)=>{
    try{
        let allData= await UserSteps.find()
        
        let paridhi=[]
        let rudresh=[]
        let dayss=[]
        
        allData.forEach(element => {
        if(element.username=="paridhi"){
            paridhi.push(element.steps)
        }
        else{
            rudresh.push(element.steps)
        }
        
        dayss.push(element.date)
        console.log(element.date)
    });
        res.send({"paridhi":paridhi,"rudresh":rudresh,"days":dayss})
    }
    catch(error){
        console.log(error)
        res.send(error)
    }

  }

module.exports = {saveSteps , getSteps}