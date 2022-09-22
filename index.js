const PORT = 8000
const express = require('express')
const cors =  require('cors')
const axios = require('axios')
const { request } = require('express')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/search-back', (req,res) => {
    const search = req.query.search
    const options = {
        method: 'GET', 
        params: {searchQuery : search},
        url: `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${search}&language=en&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.get('/nearby-category-back', (req,res) => {
    const lat = req.query.lat
    const long = req.query.long
    const category = req.query.category
    const options = {
        method: 'GET', 
        params: {lat: lat, long:long, category:category},
        url: `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${lat},${long}&category=${category}&language=en&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.get('/nearby-back', (req,res) => {
    const lat = req.query.lat
    const long = req.query.long
    const options = {
        method: 'GET', 
        params: {lat: lat, long:long},
        url: `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${lat},${long}&category=hotels&language=en&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.get('/restaurants-rome-back', (req,res) => {
    const options = {
        method: 'GET', 
        url: `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=41.9%2C12.5&category=restaurants&radius=7&radiusUnit=mi&language=en&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.get('/hotels-paris-back', (req,res) => {
    const options = {
        method: 'GET', 
        url: `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=48.85%2C2.35&category=hotels&radius=6&radiusUnit=mi&language=en&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.get('/hotels-barcelona-back', (req,res) => {
    const options = {
        method: 'GET', 
        url: `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=41.38%2C2.16&category=hotels&radius=6&radiusUnit=mi&language=en&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.get('/details', (req,res) => {
    const location = req.query.location
    const options = {
        method: 'GET', 
        params: {location : location},
        url: `https://api.content.tripadvisor.com/api/v1/location/${location}/details?language=en&currency=USD&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.get('/images', (req,res) => {
    const location = req.query.location
    const options = {
        method: 'GET', 
        params: {location : location},
        url: `https://api.content.tripadvisor.com/api/v1/location/${location}/photos?language=en&key=${process.env.API_KEY}`,
        headers: {Accept: 'application/json'}
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    })
    .catch(err => console.error(err));
})

app.listen(8000, () => console.log(`server running on ${PORT}`))