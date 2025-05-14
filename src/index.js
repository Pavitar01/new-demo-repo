
const express = require('express');
const setRoutes = require('./routes/index');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Express server!',
        routes: {
            '/api/example': 'Example API endpoint',
            '/api/users': 'Users API endpoint',
        }
    });
})
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});