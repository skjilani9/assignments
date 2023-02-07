const mongoose = require("mongoose");

const project = new mongoose.Schema({

    rank: {
        type:Number,
        required:[true,"please enter the rank"]
    },
    title: {
        type: String,
        required: [true,"please enter the title"]
    },
    thumbnail: {
        type: String,
        required: [true,"please enter the thumbnail"]
    },
    rating: {
        type: String,
        required: [true,"please enter the rating"]
    },
    id: {
        type: String,
        required: [true,"please enter the id"]
    },
    year: {
        type: Number,
        required: [true,"please enter the year"]
    },
    image: {
        type: String,
        required: [true,"please enter the image"]
    },
    description: {
        type: String,
        required: [true,"please enter the description"]
    },
    trailer: {
        type: String,
        required: [true,"please enter the trailer"]
    },
    genre: [{
        type: String,
        required: [true,"please enter the genre"]
    }],
    director: [{
        type: String,
        required: [true,"please enter the director"]
    }],
    writers: [{
        type: String,
        required: [true,"please enter the writers"]
    }],
    imdbid: {
        type: String,
        required: [true,"please enter the imdbid"]
    },
})

module.exports = mongoose.model("miniproject", project)