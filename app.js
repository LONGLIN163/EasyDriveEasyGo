var express=require("express")

var app=express()

//connect to the database
var mongoose=require("mongoose")
mongoose.connect("localhost/coolcars")

//import the model file
var Car=require("./models/Car")

//staticize www folder
app.use(express.static("www"))

//create a API that can check info of everycars,include imgs' info.
app.get("/carinfo/:id",(req,res)=>{
        //get this id 
        var id=req.params.id;
        //check data from database
        Car.find({"id":id}).exec((err,results)=>{
             res.json({"result":results[0]})
        })
})

//create a API that can get same brand or series cars info of a certain car
app.get("/carlike/:id",(req,res)=>{
        //get this id
        var id=req.params.id;
        //check data from database
        Car.find({"id":id}).exec((err,results)=>{
            //get this car's brand and series
                var brand=results[0].brand
                var series=results[0].series
                //continue check with upper brand and series
                Car.find({brand,series}).exec((err,results)=>{
                res.json({results})
                })
        })
})

//get all brand and series
app.get("/brandAnaSeries",(req,res)=>{
    //get this id 
    res.json({
        "A":[
            {"Audi":["A4","A5","Q5","Q7","Q9","TT"]},
            {"Auto":["At4","At5","Qt5","Qt7","Qt9","tTT"]}
        ],
        "B":[
            {"Budi":["B4","B5","BQ5","BQ7","BQ9","BTT"]},
            {"Buto":["BT4","BT5","BQT5","BQT7","BQT9","BTTT"]}
        ],
        "C":[
            {"Cudi":["C4","C5","CQ5","CQ7","CQ9","CTT"]},
            {"Cuto":["CT4","CT5","CQT5","CQT7","CQT9","CTTT"]}
        ]
    })
})



//set listion port
app.listen(3000,(err)=>{
    console.log("run at 3000 port")
})