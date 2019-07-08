const express = require('express');
const app = express();
const managementController = require('./controllers/managementController.js')

app.use(express.json());

// Owner endpoints
app.get('/api/owners', managementController.readOwnerData);
app.post('/api/owner', managementController.createOwner);
app.put('/api/owner/:id/:newName', managementController.updateOwnerName)
app.delete('/api/owner/:id', managementController.deleteOwner);

// Tank enpoints
app.post('/api/owner/:id/tankArmory', managementController.createTank);
// app.put('/api/owner/:id/tankArmory/:tankID', managementController.updateTankStats)
app.delete('/api/owner/:id/tankArmory/:tankID', managementController.deleteTank);


const port = 3008;
app.listen(port, () => console.log(`Server listening on port ${port}`));