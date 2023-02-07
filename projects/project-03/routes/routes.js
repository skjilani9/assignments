const express = require("express");
const { creativemovie, allmovies, singlemovie, streamvide,streamAPI } = require("../controls/Projectcontrol");




const router = express.Router();

router.route("/movie").post(creativemovie);

router.route("/allmovies").get(allmovies);

router.route("/movie/:_id").get(singlemovie);

router.route("/movie/strem/:_id").get(streamvide);

// router.route("/movie/strem/:id").get(streamAPI);




module.exports = router;