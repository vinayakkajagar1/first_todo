
const zod = require('zod')

function createtodoMiddleware(req, res, next) {
    
        const title = req.body.title
        const completed = req.body.completed
        const titleSchema = zod.string().min(8)
        const statusSchema = zod.boolean()
         titleSchema.safeParse(title);
         statusSchema.safeParse(completed)
         next();
    

}

function updateTodoMiddleware(req,res,next){
    
        const id = req.body.id
        const idschema = zod.string()
        idschema.safeParse(id);
        next()
   
}




module.exports = {createtodoMiddleware,updateTodoMiddleware};