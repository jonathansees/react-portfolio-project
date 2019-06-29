'use strict';

const router = require("express").Router();
const yelp = require('yelp-fusion');

const apiKey = 'xvNpInpIU1FBjlSOg9yEVRptavdvJhcpVh6eIWM4maRwPpfctooKafFos_M77m9iBRqvPd3N9Fs7Ts8wbI5Q1zVxdEtWkAQE9BxLQwef6STO66hcOEunNuSNlaIIXHYx';

const client = yelp.client(apiKey);

// Matches with "/api/restaurants"
router.route("/")
  .get((req, res) =>{
    const {query} = req
    console.log(query)
    const searchRequest = {
      term: query.searchTerm,
      location: query.searchLocation,
      price: "1",
      open_now: (query.searchOpen ? true : false)
    };

    client.search(searchRequest).then(response => {
      // const id = response.jsonBody.businesses[0].id;
      // console.log(id);
      res.json(response);
    }).catch(e => {
      console.log(e);
    });
});

module.exports = router;