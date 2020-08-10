const express=require('express');
const app=express();
const ejs=require('ejs');
const path=require('path');
const router=express.Router();
const bodyparser= require('body-parser');


app.use(express.urlencoded());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static('public'));


router.get('/home',function (req ,res){
res.render('index');
             });
app.use('/', router);


const port=process.env.PORT||800;
app.listen(port,()=>console.log(`listening on port ${port}...`));