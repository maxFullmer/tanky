const express = require('express');
const app = express();
const managementController = require('./controllers/managementController.js')

app.use(express.json());


app.get('/api/tankStats', managementController.read);
app.post('/api/tankArmory', managementController.create);

app.delete('/api/tankArmory/:id', managementController.delete);

const port = 3008;
app.listen(port, () => console.log(`Server listening on port ${port}`));