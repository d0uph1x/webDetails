import express from 'express'
import { createWebdetails, getWebdetails } from '../controllers/webdetails.js'

const router = express.Router()

router.get('/', getWebdetails)
router.post('/', createWebdetails)

export default router