const express = require('express')
const { createElementScreenShot } = require('../../utils/Puppeteer')
const router = express.Router()

router.post('/screenshot', (req, res) => {
  createElementScreenShot(
    req.body.pageData,
    req.body.elemData
  ).then((screenShot) => {
    res.json({
      success: true,
      imageData: screenShot
    })
  })
})

module.exports = router
