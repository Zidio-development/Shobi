const express = require('express');
const TeamMember = require('../models/TeamMember');

const router = express.Router();

router.get('/team', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
