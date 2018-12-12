const express = require('express');
const router = express.Router();
const isAutheticated = require('../middlewares/isAuthenticated');

// GET /
router.get('/', isAutheticated, (req, res, next) => {
  return res.json({
    data: [],
  });
});

// GET /:id
router.get('/:id', (req, res, next) => {
  const user = {};
  return res.status(200).json({
    user,
  });
});

// PUT /:id
router.put('/:id', (req, res, next) => {
  const user = {};
  return res.status(200).json({
    user,
  });
});

// DELETE /:id
router.delete('/:id', (req, res, next) => {
  return res.status(204).json();
});

module.exports = router;