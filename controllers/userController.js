
const express =require ('express');
const UserSteps=require("../models/userStep")

const saveSteps = async (req, res) => {
    try {
        console.log("inside save route")
      console.log("steps");
      console.log(req.body);
      url=req.body.url 
      steps=req.body.steps
      var nowDate = new Date(); 
      var date = nowDate.getDate() +'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()
      console.log(date)
      

      if(url.includes("rudresh")){
        username="rudresh"
      }
      else{
        username="paridhi"
      }
       
      const newStepsEntry = new UserSteps({
        username,
        steps,
        date
        
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
        //console.log(element.date.toString().slice(0,10))
        dayss.push(element.date.toString().slice(0,10))
        //console.log(element.date)
    });
        res.send({"paridhi":paridhi,"rudresh":rudresh,"days":dayss})
    }
    catch(error){
        console.log(error)
        res.send(error)
    }

  }

  const verifyToday=async (req,res)=>{

    console.log(req.body)
    let username=req.body.username
    if(username.includes("paridhi")){
        username="paridhi"
    }
    else{
        username="rudresh"
    }
    
    var nowDate = new Date(); 
    var datee = nowDate.getDate() +'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear()
    
    console.log(datee)

    await UserSteps.find({username:username,date:datee}).then(response=>{
        console.log(response)
        if(response.length==1){
            res.send({"result":true})
        }
        else{
            res.send({"result":false})
        }
        
    }).catch(error=>{
        res.send(error)
    })

    

  }

  const deleteAll=async (req,res)=>{


    await UserSteps.deleteMany().then(result=>{
        res.send(result)
    }).catch(error=>{
        res.send(error)
    })
  }
module.exports = {saveSteps , getSteps,deleteAll,verifyToday}