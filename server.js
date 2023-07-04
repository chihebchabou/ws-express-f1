// Dependencies
const express = require('express');
const path = require('path');

// Initialize application
const app = express();

// User Data
const users = [
  { id: 1, fullName: 'John Doe', email: 'john@gmail.com' },
  { id: 2, fullName: 'Jane Doe', email: 'jane@gmail.com' },
  { id: 3, fullName: 'Sam Smith', email: 'sam@gmail.com' },
];

// app.get('/', (req, res) => {
//   console.log(req.hostname);
//   console.log(req.method);
//   console.log(req.get('Content-Type'));
//   // res.send('<h1>Home Page</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'), err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('500 Server error');
//     } else {
//       console.log('Success');
//     }
//   });
// });

// app.get('/about', (req, res) => {
//   // res.send('<h1>About Page</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'about.html'), err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('500 Server error');
//     } else {
//       console.log('Success');
//     }
//   });
// });

// app.get('/contact', (req, res) => {
//   // res.send('<h1>Contact Page</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'contact.html'), err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('500 Server error');
//     } else {
//       console.log('Success');
//     }
//   });
// });

// Define authorize middleware
const authorize = (req, res, next) => {
  const isAuth = true;
  if (isAuth) {
    req.users = users;
    next();
  } else {
    res.status(401).send('401 Not Authorized');
  }
};

// Middleware use
app.use(authorize);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', (req, res) => {
  console.log(req);
  res.send(req.users);
});

// Define port
const port = process.env.PORT || 5000;

// Listen to the port
app.listen(port, () => console.log(`Server is running on port ${port}`));
