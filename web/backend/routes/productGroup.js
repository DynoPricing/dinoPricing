const express = require('express')
const db_functions = require('../db_function')
const router = express.Router()

// GET all product group  
router.get('/' , (req,res) => {
    res.json({mssg: 'GET all product groups'})
})

// GET a singel product group  
router.get('/:id' , (req,res) => {
    res.json({mssg: 'GET a singel product groups'})
})

// POST a new product group 
router.post('/' , (req,res) => {
    db_functions.dinoPricingDB.create_pg(req.body)
     // json file contain data for new product group 
    res.json({mssg: 'POST a new product group'})
})

// DELETE a product group  
router.delete('/:id' , (req,res) => {
    res.json({mssg: 'DELETE a new product group'})
})

// UPDATE a product group  
router.patch('/' , (req,res) => {
    res.json({mssg: 'UPDATE a product group'})
})



router.get('/' , (req,res) => {})


module.exports = router