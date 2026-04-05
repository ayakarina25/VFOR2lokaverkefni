const db = require('../lib/db');

const getAllCourses = async () => {
    const result = await db.query('SELECT * FROM courses ORDER BY id ASC');
    return result.rows;
};

// NEW: Function to fetch a single course by ID
const getCourseById = async (id) => {
    // Using $1 to safely insert the id into the query
    const result = await db.query('SELECT * FROM courses WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    // Return the first (and only) row found
    return result.rows[0];
};

module.exports = {
    getAllCourses,
    getCourseById  // Don't forget to export the new function!
};