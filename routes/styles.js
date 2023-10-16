import express from "express"
import {
  createStyle,
  getStyle,
  getStylesCount,
  getStylesPageCount,
  getUserStyles,
  updateStyle,
  deleteStyle,
  getSuitableStyles,
  getSuitableStylesCount
} from "../controllers/styles.js"
import { verifyToken } from "../middleware/auth.js"
import apicache from 'apicache'
let cache = apicache.middleware

const router = express.Router()

router.post("/:guestUser/:dailyAllowedSaves", verifyToken, createStyle)
router.get("/:userId", verifyToken, cache("5 seconds"), getUserStyles)
router.get("/style/:id", verifyToken, cache("5 seconds"), getStyle)
router.get("/:userId/count", verifyToken, getStylesCount)
router.get("/:userId/pagecount", verifyToken, getStylesPageCount)
router.get("/:userId/:sortByOccasion", verifyToken, cache("5 seconds"), getSuitableStyles)
router.get("/:userId/pagecount/:sortByOccasion", verifyToken, cache("2 seconds"), getSuitableStylesCount)

router.patch("/:id/update/:guestUser/:dailyAllowedEdits", verifyToken, updateStyle)
router.delete("/:id/delete/:guestUser/:dailyAllowedDeletes", verifyToken, deleteStyle)

export default router