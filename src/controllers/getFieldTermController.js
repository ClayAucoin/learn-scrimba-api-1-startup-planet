// src/controllers/getFieldTermController.js

import { startups } from "../data/data.js"

export const getFieldTermController = (req, res) => {

  const { field, term } = req.params
  let filteredData = startups

  const allowedFields = ['country', 'continent', 'industry']

  if (!allowedFields.includes(field)) {
    return res.status(400).json({ message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  }

  filteredData = filteredData.filter(startup =>
    startup[field].toLocaleLowerCase() === term.toLocaleLowerCase()
  )

  res.json(filteredData)
}
