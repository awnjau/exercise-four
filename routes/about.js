const express = require('express');
const router = express.Router();

router.get ("/about",(req,res) => {
    res.send("about");
})

router.get ("/me",(req,res) => {
    res.send("about me");
})

module.exports = router;