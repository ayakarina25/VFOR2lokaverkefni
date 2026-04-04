CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    time_hours INT,
    instructor VARCHAR(255),
    image_url VARCHAR(500),
    price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

TRUNCATE TABLE courses RESTART IDENTITY;

INSERT INTO courses (title, description, time_hours, instructor, price) VALUES
('Web Development Bootcamp', 'Learn HTML, CSS, JavaScript, and React', 40, 'John Smith', 99.99),
('Node.js Masterclass', 'Backend development with Node.js and Express', 25, 'Sarah Johnson', 79.99),
('Database Design', 'PostgreSQL, MongoDB and database modeling', 20, 'Mike Brown', 89.99),
('Python for Beginners', 'Learn Python programming from scratch', 30, 'Emily Davis', 69.99),
('UI/UX Design Fundamentals', 'Design beautiful user interfaces', 15, 'Lisa Anderson', 59.99);

-- Users & enrollments tables (optional)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS enrollments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, course_id)
);