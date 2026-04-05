const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getHomePage);
router.get('/courses', courseController.getAllCourses);

// Dynamic route for a single course
// The ':' indicates that 'id' is a variable, not a fixed path
router.get('/courses/:id', courseController.getCourseDetail);

router.get('/about', courseController.getAboutPage);

module.exports = router;