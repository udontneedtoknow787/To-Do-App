const express = require('express');
const { ToDo } = require('../db');
const router = express.Router();

router.get('/', async function(req, res){
    const completedTodos = await ToDo.find({
        completed: true
    });
    // console.log(completedTodos);
    if(completedTodos){
        return res.json(completedTodos)
    }
    else return res.status(403).json({
        messgae: "Something went wrong!!!"
    })
});

module.exports = router