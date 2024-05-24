const express = require('express');
const app = express();

// ... other app configuration

app.use('/', router); // Mount the router object at the root path

app.listen(3000, () => console.log('Server listening on port 3000'));