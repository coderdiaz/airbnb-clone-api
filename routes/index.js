const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res, next) => {
  return res.status(200).json({
    code: 200,
    message: 'Welcome to Airbnb Clone API',
  });
});

module.exports = router;