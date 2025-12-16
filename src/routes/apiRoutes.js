// src/routes/apiRoutes.js

import express from "express"
import { getQueryController } from "../controllers/getQueryController.js"
import { getFieldTermController } from "../controllers/getFieldTermController.js"

const router = express.Router()

router.get("/", getQueryController)
router.get("/:field/:term", getFieldTermController)

export default router