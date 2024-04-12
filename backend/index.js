const port = 5000
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require( 'multer' )
const path = require('path')
const cors = require('cors')

app.use(express.json());
app.use(cors());

//Database connection with mongoDb
mongoose.connect("mongodb+srv://shopperWebsite:zRV8oFwcF3IImbat@cluster0.1slliyr.mongodb.net/e-commerce")

app.get('/',(req,res)=>{
    res.send("Welcome to Shopper")
})

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage:storage
})

//creating upload end point for images
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
        res.json({
            success:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`
        })
})

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:String,
        required:true,
    },
    old_price:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avaliable:{
        type:Boolean,
        default:true,
    }
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_prod_array = products.slice(-1);
        let last_prod = last_prod_array[0];
        id = last_prod.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,

    })
})

app.post('/removeproduct', async (req, res) => {
    // Check if the request body contains an ID
    if (!req.body.id) {
        return res.status(400).json({
            success: false,
            error: 'No ID provided in the request.'
        });
    }

    const product = await Product.findOneAndDelete({ id: req.body.id });

    if (!product) {
        return res.status(404).json({
            success: false,
            error: 'No related product found.'
        });
    }

    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    });
});

app.get('/getallproducts',async(req,res)=>{
    let products=await Product.find({});
    res.send(products);
    console.log("All products fetched");
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port"+port);
    }
    else{
        console.log("error in connecting"+error);
    }
})