const express = require('express')
const router = express.Router();
const zod = require('zod');
const { ToDo } = require('../db');

const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
});

router.post('/', async function(req, res){
    const newtodo = req.body;
    // console.log("post request recieved!!");
    const result = todoSchema.safeParse(newtodo);
    if(!result.success){
        return res.status(405).json({
            message: "Invalid data input !"
        })
    }
    const oldtodo = await ToDo.findOne({
        title: req.body.title
    });
    if(oldtodo){
        return res.status(405).json({
            message: "Todo with same title already exist."
        })
    }
    const todo = await ToDo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
    });
    if(todo){
        return res.json({
            message: "To-Do created succesfully."
        })
    }
    else{
        return res.status(406).json({
            message: "Something wrong happend."
        })
    }

});

router.get('/all', async function(req, res){
    const alltodos = await ToDo.find({});
    return res.json(alltodos);
});

const updateSchema = zod.object({
    title: zod.string()
});

// router.put('/update', async function(req, res){
//     const result = updateSchema.safeParse(req.body);
//     if(!result.success){
//         return res.status(401).json({
//             message: "Invalid Input!!"
//         });
//     }
//     const todo = await ToDo.findOne({
//         title: req.body.title
//     });
//     if(todo){
//         await ToDo.updaateOne({
//             title: todo.title
//         },)
//     }
// });

module.exports = router

