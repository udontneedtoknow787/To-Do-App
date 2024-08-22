const express = require('express');
const { ToDo } = require('../db');
const router = express.Router();

router.get('/', async function(req, res){
    const completedTodos = await ToDo.find({
        completed: true
    });
    return res.json(completedTodos);
});

module.exports = router