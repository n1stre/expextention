const express = require('express')
const router = express.Router()

router.get('/screenshot', (req, res) => {
  res.json({ message: "OKOK"})
})

export default router
