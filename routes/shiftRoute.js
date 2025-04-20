// routes/shiftRoutes.js

const express = require('express');
const router = express.Router();

// Dummy Shifts List (for now)
const shifts = [
  { id: 1, title: 'Morning Shift', startTime: '08:00 AM', endTime: '04:00 PM' },
  { id: 2, title: 'Evening Shift', startTime: '04:00 PM', endTime: '12:00 AM' },
];

// @route   GET /api/shifts
// @desc    Get all shifts
// @access  Public (for now)
router.get('/', (req, res) => {
  res.json(shifts);
});

module.exports = router;
