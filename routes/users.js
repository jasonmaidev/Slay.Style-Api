import express from "express"
import { getUser } from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"
import apicache from 'apicache'
let cache = apicache.middleware

const router = express.Router()

router.get("/:id", verifyToken, cache('30 seconds'), getUser)


export default router