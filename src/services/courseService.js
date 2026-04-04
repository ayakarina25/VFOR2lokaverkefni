const db = require('../lib/db');

const getAllCourses = async () => {
  const result = await db.query('SELECT * FROM courses ORDER BY id ASC');
  return result.rows;
};

const getCourseById = async (id) => {
  const result = await db.query('SELECT * FROM courses WHERE id = $1', [id]);
  return result.rows[0];
};

const getPopularCourses = async (limit = 4) => {
  const result = await db.query('SELECT * FROM courses ORDER BY id ASC LIMIT $1', [limit]);
  return result.rows;
};

module.exports = {
  getAllCourses,
  getCourseById,
  getPopularCourses,
};