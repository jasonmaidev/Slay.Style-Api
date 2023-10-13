import express from "express"
import {
  resetWardrobe,
  createApparel,
  getApparels,
  getApparelsCount,
  updateApparel,
  deleteApparel,
  deleteDemoApparel,
  getApparel,
  getShortTops,
  getLongTops,
  getOuterwear,
  getOnePiece,
  getPants,
  getShorts,
  getFootwear,
  getHeadwear
} from "../controllers/apparels.js"
import { verifyToken } from "../middleware/auth.js"
import multer from "multer"

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = express.Router()

router.get("/:userId", verifyToken, getApparels)
router.get("/:userId/count", verifyToken, getApparelsCount)
router.get("/:userId/shorttops", verifyToken, getShortTops)
router.get("/:userId/longtops", verifyToken, getLongTops)
router.get("/:userId/outerwear", verifyToken, getOuterwear)
router.get("/:userId/onepiece", verifyToken, getOnePiece)
router.get("/:userId/pants", verifyToken, getPants)
router.get("/:userId/shorts", verifyToken, getShorts)
router.get("/:userId/footwear", verifyToken, getFootwear)
router.get("/:userId/headwear", verifyToken, getHeadwear)
router.get("/:userId/:id", verifyToken, getApparel)

router.post("/", verifyToken, upload.single("picture"), createApparel)
router.post("/:userId/resetwardrobe", verifyToken, resetWardrobe)
router.patch("/:id/update", verifyToken, updateApparel)
router.delete("/:id/delete", verifyToken, deleteApparel)
router.delete("/:id/deletedemo", verifyToken, deleteDemoApparel)

export default router