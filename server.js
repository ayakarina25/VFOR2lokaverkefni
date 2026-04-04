require('dotenv').config();  // Load environment variables from .env
const express = require('express');
const path = require('path');
const courseService = require('./src/services/courseService');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Home page – show popular courses
app.get('/', async (req, res) => {
  try {
    const popularCourses = await courseService.getPopularCourses(4);
    res.render('index', { popularCourses });
  } catch (err) {
    console.error(err);
    res.render('index', { popularCourses: [] });
  }
});

// Courses page – show all courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.render('courses', { courses });
  } catch (err) {
    console.error(err);
    res.render('courses', { courses: [] });
  }
});

// Single course detail page
app.get('/courses/:id', async (req, res) => {
  try {
    const course = await courseService.getCourseById(req.params.id);
    if (!course) {
      return res.status(404).render('404', { title: 'Not Found' });
    }
    res.render('course-detail', { course });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { title: 'Error' });
  }
});

// About page (static for now)
app.get('/about', (req, res) => {
  res.render('about');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});