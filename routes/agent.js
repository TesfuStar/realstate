import express from 'express'
import {createAgent,deleteComent,CreateComment,getSingleAgent,updateAgent,getAllAgent} from '../controllers/agent.js' 


const router =express.Router()

router.post('/',createAgent)
router.post('/:id/comment',CreateComment)
router.get('/find/:id',getSingleAgent)
router.put('/find/:id',updateAgent)
router.delete('/:id',deleteComent)
router.get('/',getAllAgent)
export default router