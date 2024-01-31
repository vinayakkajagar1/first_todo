const { Router } = require("express");
const {todo} = require('../db')
const router = Router();
const {createtodoMiddleware, updateTodoMiddleware} = require('../middleware/todo')



router.post('/addTodo',createtodoMiddleware, async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const completed = req.body.completed
 await  todo.create({
    title : title,
    description : description,
    completed : completed
   })
   res.header("Access-Control-Allow-Origin", "*")

    res.json({
        msg:'todo has been created'
    })

});

router.options('/addTodo', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.status(204).end();
});

router.get('/gettodo',async (req,res)=>{
    const todos =await todo.find();
    res.header("Access-Control-Allow-Origin", "*")
    res.json(todos)
})

router.put('/completed',updateTodoMiddleware, async(req,res)=>{
          await todo.updateOne({
            _id : req.body.id
          },{
            completed : true
          })

          res.json({
            msg : 'completed'
          })
})


module.exports = router;