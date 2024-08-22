const express = require('express')
const router = express.Router();
const todoRouter = require('./todos')
const completeRouter = require('./completedTodo')

router.use('/todos', todoRouter);
router.use('/completed', completeRouter);

module.exports = router