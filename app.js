const express = require('express');
const app = express();
const todoRoutes = require('./router/todo.js');
const port = 3000;

app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');

// Route untuk todos
app.use('/todos', todoRoutes);

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.render('index');
});

// Menjalankan server
app.listen(port, () => console.log(`Server berjalan di Port: http://localhost:${port}`));
