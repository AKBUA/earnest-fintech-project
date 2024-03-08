const express=require('express');
const { updateTask,getAllTask,deleteTask,postTask } = require('../controllers/Task');
const router=express.Router()
router.post('/tasks',postTask);
router.get('/tasks',getAllTask);
router.put('/tasks/:id',updateTask);
router.delete('/tasks/:id',deleteTask)
module.exports=router;