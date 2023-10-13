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

const router = express.Router()

router.post("/", verifyToken, createStyle)
router.get("/:userId", verifyToken, getUserStyles)
router.get("/style/:id", verifyToken, getStyle)
router.get("/:userId/count", verifyToken, getStylesCount)
router.get("/:userId/pagecount", verifyToken, getStylesPageCount)
router.get("/:userId/:sortByOccasion", verifyToken, getSuitableStyles)
router.get("/:userId/pagecount/:sortByOccasion", verifyToken, getSuitableStylesCount)

router.patch("/:id/update", verifyToken, updateStyle)
router.delete("/:id/delete", verifyToken, deleteStyle)

export default router