const express = require('express')
const router = express.Router();
const zod = require('zod');
const { ToDo } = require('../db');

const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
});
const updateSchema = zod.object({
    title: zod.string(),
    description: zod.string().optional(),
    completed: zod.boolean().optional()
});
const deleteSchema = zod.object({
    title: zod.string()
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

router.post('/update', async function(req, res){
    const result = updateSchema.safeParse(req.body);
    if(!result.success){
        return res.status(401).json({
            message: "Invalid Input!!"
        });
    }
    const todo = await ToDo.findOne({
        title: req.body.title
    });
    // if(todo) return res.json({
    //     message: "todo found!"
    // })
    if(todo){
        // console.log("todo found");
        const response = await ToDo.updateOne({
            title: req.body.title
        },{
            "$set": {completed: req.body.completed},
            "$set": {completed: req.body.description}
        });
        if(response) return res.json({
            message: "succesfully updated"
        });
        else return res.status(403).json({
            message: "found the ToDo, but couldn't update !!"
        });
    }
    else{
        res.status(403).json({
            message: "Todo not found!!"
        })
    }
});

router.post('/delete', async function(req, res){
    const response = deleteSchema.safeParse(req.body)
    if(!response.success){
        res.json({
            message: "wrong Input recieved"
        })
    }
    const todo = await ToDo.findOne({title: req.body.title})
    if (todo) {
        try {
            await ToDo.deleteOne({
                title: req.body.title
            });
            return res.json({
                message: "Todo deleted succesfully"
            })
        }
        catch (err) {
            return res.status(405).json({
                message: "something wrong happend during deleting process"
            })
        }
    }
    else{
        return res.json({
            message: "todo does not exist"
        })
    }  
});


module.exports = router

