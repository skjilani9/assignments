const Movie = require("../modles/Projectmodles");

const fs = require("fs")

exports.creativemovie = (req, res, next) => {
    const result = Movie.create(req.body);
    res.status(201).json({
        success: true,
        message: "movie is  created",
    })
};


exports.allmovies = async (req, res) => {
    const result = await Movie.find();
    res.status(200).json({
        success: true,
        message: "this are the movies",
        movies: result,
    })
}


exports.singlemovie = async (req, res) => {
    const result = await Movie.findById(req.params._id);
    res.status(200).json({
        success: true,
        message: "movie details",
        movie: result,
    })
};



exports.streamvide = async(req,res)=>{
    const range = req.headers.range;
    console.log(range)
    if(!range){
        res.status(400).json({success:false,
        message:"required range header"})
        // range = "bytes=0-"
    }
    else {
        Movie.findById(req.params._id).then(movie =>{
            debugger;
            if(!movie){
                res.status(400).json({
                    message:"movie not found"
                });
            }
            else{
                const videopath = movie.trailer;
                console.log(videopath)
                const videosize = fs.statSync(videopath).size;
                const CHUNK_SIZE = 500*1024;
                const start = Number(range.replace(/\D/g,""));
                const end = Math.min(start +  CHUNK_SIZE , videosize - 1);
                const contentlen = end -start +1;
                const vid = videopath.split(".")
                console.log(vid[3])
                const header = {
                    "Content-Range":`bytes${start} - ${end}/${videosize}`,
                    "Accept-Ranges":"bytes",
                    "Content-Length":contentlen,
                    "Content-type":`video/${vid[3]}`
                };
                res.writeHead(206,header);
                const videstream = fs.createReadStream(videopath ,{start,end});
                videstream.pipe(res);
            }
        }).catch(err =>{
            res.status(500).json({message:"error streaming the movie",error:err});
        })
    }
};








// exports.streamAPI = async (req, res) => {
//     const CHUNK_SIZE = 10 ** 6; // 1MB
//     const range = req.headers.range; //206 - Partial content sent by server
//     if (!range) {
//         res.status(400).send('Requires Range Header');
//     }
//     const show = await Movie.findOne({ _id: req.params.id }).then(movie => {
//         if (!movie) {
//             res.status(400).json({
//                 message: "movie not found"
//             });
//         }
//         else {
//             const videPath = movie.trailer;
//             const videoSize = fs.statSync(videPath).size;
//             const start = Number(range.replace(/\D/g, ""));
//             const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
//             const contentLength = end - start + 1;
//             const vid = videPath.split(".")
//             console.log(vid[3])

//             const headers = {
//                 "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//                 "Accept-Ranges": "bytes",
//                 "Content-Length": contentLength,
//                 "Content-Type": `video/${vid[3]}`
//             }

//             // HTTP Status 206 for Partial Content
//             res.writeHead(206, headers);
//             const videoStream = fs.createReadStream(videPath, { start, end }); //Open the file and read the data present in it
//             videoStream.pipe(res); // read the outputstream and connect it with the inputstream
//         }
//     });

// }