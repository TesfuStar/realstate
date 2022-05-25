import express from 'express'
import {createProperty,getProperty,getByType,
    updateProperty,deleteProperty,getSingleProperty} from '../controllers/property.js' 

const router =express.Router()
router.post('/',createProperty)
router.get('/',getProperty)
router.get('/',getByType)
router.get('/property/:id',getSingleProperty)
router.put('/:id',updateProperty)
router.delete('/:id',deleteProperty)
export default router
