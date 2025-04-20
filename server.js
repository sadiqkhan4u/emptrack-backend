const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const shiftRoutes = require('./routes/shiftRoutes');     // ✅ ADD THIS
const checklistRoutes = require('./routes/checklistRoutes'); // ✅ ADD THIS
const cors = require('cors');

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);        // ✅ already present
app.use('/api/shifts', shiftRoutes);     // ✅ add this line
app.use('/api/checklists', checklistRoutes); // ✅ add this line

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
