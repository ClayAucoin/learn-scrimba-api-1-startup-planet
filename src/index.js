// src/index.js

import app from "./app.js"
// import { config } from "./config.js"

// const port = config.port
const port = 8000

// listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

