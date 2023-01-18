const Hotel = require("../Modles/modles");

exports.createproduct = (req,res)=>{
    const results = Hotel.create(req.body);
    res.status(201).json({
        success:true,
        message:"product created",
    });
};


exports.getproduct =async (req,res)=>{
    const results = await Hotel.find();
    res.status(201).json({
        success:true,
        message:"products fetched successfully",
        results,
    });
};


exports.filterpage = (req,res)=>{
    let {mealtype , cuisine,location,lcost,hcost,page,sort}=req.body;

    page = page?page:1;
    sort = sort?sort:1;

    let payload = {};
    const itemsperpage = 3;

    let startind = itemsperpage*page-itemsperpage;
    let endind = itemsperpage*page;

    if(mealtype){
        payload["type.mealtype"] = mealtype;
    }
    if(mealtype && cuisine){
        payload["type.mealtype"] = mealtype;
        payload["Cuisine.cuisine"] = {$in :cuisine};
    }
    if(mealtype && lcost && hcost){
        payload["cost"]= {$gte :lcost , $lte:lcost};
        payload["type.mealtype"] = mealtype;
    }
    if(mealtype && lcost && hcost && cuisine){
        payload["cost"]= {$gte :lcost , $lte:lcost};
        payload["type.mealtype"] = mealtype;
        payload["Cuisine.cuisine"] = {$in :cuisine};
    }
    if(mealtype &&location){
        payload["cityname"]= location;
        payload["type.mealtype"] = mealtype;
    }
    if(mealtype && location && cuisine){
        payload["cityname"]= location;
        payload["type.mealtype"] = mealtype;
        payload["Cuisine.cuisine"] = {$in :cuisine};
    }
    if(mealtype && location && cuisine && lcost && hcost){
        payload["cityname"]= location;
        payload["type.mealtype"] = mealtype;
        payload["Cuisine.cuisine"] = {$in :cuisine};
        payload["cost"]= {$gte :lcost , $lte:lcost};
    }

    Hotel.find(payload).sort({cost :sort})
    .then(data =>{
        const filterdata = data.slice(startind,endind);
        res.status(200).json({
            message:"Restaurants fetched successfully",
            restaurants : filterdata
        })
    }).catch(err =>{
        res.status(400).json({
            error :err
        });
    })

};