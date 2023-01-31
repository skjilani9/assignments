const Order = require("../modules/ordermodules");

const Products = require("../modules/productmodules");

const Errorhand = require("../utllies/errorhand");

const asyncerror = require("../middleware/asyncerror");

// create order
exports.createorder = asyncerror(async (req, res, next) => {
    const { shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice, } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(201).json({
        success: true,
        order,
    });
});



// get single order
exports.singleorder = asyncerror(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
        return next(new Errorhand(`order not found with this id${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});



// get logged in order
exports.myorder = asyncerror(async (req, res, next) => {
    const order = await Order.find({ user: req.user._id });

    res.status(200).json({
        success: true,
        order,
    });
});



// total orders (admin)
exports.allorders = asyncerror(async (req, res, next) => {
    const order = await Order.find();

    totalAmount = 0;

    order.forEach((order) => { totalAmount = totalAmount + order.totalPrice });

    res.status(200).json({
        success: true,
        totalAmount,
        order,
    });
});



// update order(admin)
exports.updateorder = asyncerror(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new Errorhand("order is not found with this id", 404));
    }

    if (order.orderStatus === "Delivered") {
        return next(new Errorhand("order is already delivered ", 400));
    }

    // if (req.body.status === "Shipped") {
    //     order.orderItems.forEach(async (o) => {
    //         await stockupdate(o.product, o.quantity);
    //     });
    // }

    order.orderItems.forEach(async (o) => {
        await stockupdate(o.product, o.quantity);
    });
    
    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }


    await order.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
    });
});

async function stockupdate(id, quantity) {
    const item = await Products.findById(id);

    item.Stock -=  quantity;
    await item.save({validateBeforeSave:false});
    console.log(item);
}



// delete Order -- Admin
exports.deleteOrder = asyncerror(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new Errorhand("Order not found with this Id", 404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
    });
});