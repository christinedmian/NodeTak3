
const express = require("express")

const app = express()

const port = process.env.PORT || 3000
const path =require("path")

const x=path.join(__dirname,"../public")

app.use(express.static(x))



app.set('view engine', 'hbs');

const viewsDirectory=path.join(__dirname ,"../temp1/views")
app.set("views",viewsDirectory)

var hbs=require('hbs')
const partialsPath=path.join(__dirname,'../temp1/partials')
hbs.registerPartials(partialsPath)


app.get('/',(req,res)=>{
    res.render('index',{
        title:"HOME",
        desc:"this is home page",
        img1:"Images/test3.jpg"
    })
})


app.get('/service',(req,res)=>{
    res.render('service',{
        title:"SERVICE",
        name:"christine",
        city:"hamburg",
        age:29,
        img1:"Images/test1.jpg"
    })
})

app.get('/team',(req,res)=>{
    res.render('team',{
        title:"TEAM",
        name:"christine",
        city:"hamburg",
        age:29,
        img2:"Images/test.jpg"
    })
})


app.listen(port, () => {
    //اذا بدي يعرض شي 
    console.log("app is listening on port 3000")
})
