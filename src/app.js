// src/app.js

import express from "express"
import cors from "cors"

// routes
import apiRoutes from "./routes/apiRoutes.js"

const app = express()

app.use(cors())

app.use("/api", apiRoutes)


app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

export default app