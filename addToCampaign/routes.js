var express = require('express');
var axios = require('axios');
var router = express.Router();

//Middle ware that is specific to this router, log here
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.put("/contacts", async(req, res, next) => {
    try {
        const secret = process.env.SENDGRID_API_BEARER;
        const config = {
            headers : {
                'Authorization': `Bearer ${secret}`,
                'content-type': "application/json"
            }
        }
        console.log(req.body)
        axios.put('https://api.sendgrid.com/v3/marketing/contacts', 
            JSON.stringify(req.body), 
            config
            )
            .then(response=>res.send(response.data))
            .catch(err=>{
                res.send({
                    status: err.response.status,
                    errors: err.response.data.errors,
                })
            })
    } catch(err) {
        next(err)
    }
});

router.get("*", (req, res, next) => {
    res.send('Not available')
})

module.exports = router