// routes/checklistRoutes.js

const express = require('express');
const router = express.Router();

// Dummy Checklist List (for now)
const checklists = [
  { id: 1, title: 'Clock In', isCompleted: false },
  { id: 2, title: 'Wear Uniform', isCompleted: false },
];

// @route   GET /api/checklists
// @desc    Get all checklist items
// @access  Public (for now)
router.get('/', (req, res) => {
  res.json(checklists);
});

module.exports = router;
