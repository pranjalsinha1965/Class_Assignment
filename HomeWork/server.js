const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// In-memory user data (replace with a database in a real-world scenario)
const users = [
  { username: 'user1', password: 'password1', age: 25, suspended: false },
  { username: 'user2', password: 'password2', age: 17, suspended: false },
  // Add more users as needed
];

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulated authentication (replace with your own authentication logic)
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    req.session.logged_in = true;
    req.session.username = username;
    res.redirect('/secret_page');
  } else {
    res.send('Invalid credentials');
  }
});

app.get('/secret_page', (req, res) => {
  // Check authentication and age/suspension criteria
  if (req.session.logged_in && req.session.username) {
    const user = users.find((user) => user.username === req.session.username);

    if (user.age >= 18 && !user.suspended) {
      res.send(`Welcome to the secret page, ${req.session.username}!`);
    } else {
      res.send('Access denied. You do not meet the age or suspension criteria.');
    }
  } else {
    res.send('Access denied. Please log in first.');
  }
});

app.get('/logout', (req, res) => {
  req.session.logged_in = false;
  req.session.username = null;
  res.redirect('/');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
