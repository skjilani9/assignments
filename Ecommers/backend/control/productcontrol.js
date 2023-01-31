const Products = require("../modules/productmodules");
const Errorhand = require("../utllies/errorhand");

const asyncerror = require("../middleware/asyncerror");
const Apifeactures = require("../utllies/apifeactures");

// add product -- admin
exports.createproduct = asyncerror(async (req,res,next)=>{

    req.body.user = req.user.id;

    const product = await Products.create(req.body);


    res.status(201).json({
        success:true,
        product
    })
});


// get all products
exports.getAllproducts = asyncerror(async (req,res)=>{

    const resultperpage = 8;

    const productcount = await Products.countDocuments();

    const apifeacture = new Apifeactures(Products.find(),req.query).search().filter().pagtation(resultperpage);
    const product = await apifeacture.query;
    
    res.status(200).json({
        success:true,
        product,
        productcount,
        resultperpage,
    })
});


// update product --admin

exports.updateproducts = asyncerror(async (req,res,next)=>{

    let product = await Products.findById(req.params.id)



    if(!product){
        return next(new Errorhand("product not found", 404));
    }

    product = await Products.findByIdAndUpdate(req.params.id, res.body,{
        new: true,
        runValidators: true,
        
    });


    res.status(201).json({
        success:true,
        product,
    });
});

// Delete product
exports.deleteproduct = asyncerror(async(req,res,next) =>{
    const product = await Products.findById(req.params.id)


    if(!product){
        return next(new Errorhand("product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"product deleted successfully",
    });
});

//  single product 

exports.singleproduct = asyncerror(async(req,res,next)=>{

    const product = await Products.findById(req.params.id)


    if(!product){
        return next(new Errorhand("product not found", 404));
    }

    res.status(200).json({
        success:true,
        product,
    });

});



// create reviews
exports.reviewscreate = asyncerror(async(req,res,next)=>{
    const {rating,comment,productid} =req.body;

    const reviews = {
        user :req.user._id,
        name:req.user.name,
        rating:Number(rating),
        comment
    };

    const product = await Products.findById(productid);


    const isreviewed = product.reviews.find((revw)=>revw.user.toString()===req.user._id.toString());

    if(isreviewed){
        product.reviews.forEach((revw)=>{
            if(revw.user.toString()===req.user._id.toString()) 
                (revw.rating=rating),(revw.comment=comment);
        });
    }
    else{
        product.reviews.push(reviews);
        product.numOfReviews = product.reviews.length;
    }

    let avge = 0;
    
    product.reviews .forEach((revw)=>{
        avge = avge + rating;
    });

    product.ratings = avge / product.reviews.length;

    await product.save({validateBeforeSave:false});

    res.status(200).json({
        success:true,
        message:"reviews is added or updated"
    });
});



// get all reviews
exports.getproductreview = asyncerror(async(req,res,next)=>{
    const product = await Products.findById(req.query.id);


    if(!product){
        return next(new Errorhand("product is not found",404));
    }

    res.status(200).json({
        success:true,
        reviews:product.reviews,
    });
});


// delete reviews
exports.deletereviews = asyncerror(async (req, res, next) => {
    const product = await Products.findById(req.query.productid);
  
    if (!product) {
      return next(new Errorhand("Product not found", 404));
    }
  
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Products.findByIdAndUpdate(
      req.query.productid,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  
    res.status(200).json({
      success: true,
    });
});