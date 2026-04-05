const courseService = require('../services/courseService');

const getHomePage = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.render('index', {
            title: 'CourseHub',
            courses: courses
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).send('System error - Cannot load courses');
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.render('courses', {
            title: 'All Courses',
            courses: courses
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).send('System error - Cannot load courses');
    }
};

// NEW: Controller for a single course
const getCourseDetail = async (req, res) => {
    try {
        const id = req.params.id; // Get ID from the URL
        const course = await courseService.getCourseById(id);

        // If user enters an ID that doesn't exist
        if (!course) {
            return res.status(404).render('404', { title: 'Course Not Found' });
        }

        // Send data to the new view
        res.render('course-detail', {
            title: course.title,
            course: course
        });
    } catch (error) {
        console.error('Error fetching single course:', error);
        res.status(500).send('System error - Cannot load course');
    }
};

const getAboutPage = (req, res) => {
    res.render('about', { title: 'About CourseHub' });
};

module.exports = {
    getHomePage,
    getAllCourses,
    getCourseDetail, 
    getAboutPage
};