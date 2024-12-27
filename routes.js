const express = require('express');
const Process = require('../models/Process');

const router = express.Router();

router.get('/working-process', async (req, res) => {
  try {
    const processes = await Process.find();
    res.json(processes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
