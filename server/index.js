const express = require('express');
const app = express();
const managementController = require('./controllers/managementController.js')

app.use(express.json());

// Owner endpoints
app.get('/api/owners', managementController.readOwnerData);
app.post('/api/owner', managementController.createOwner);
app.get('/api/next-owner', managementController.getOwnerAfterNextClick);
app.get('/api/prev-owner', managementController.getOwnerAfterPrevClick);
app.put('/api/owner/:name', managementController.updateOwnerName)
// With the use of the currentOwner variable in managementController.js,
// we don't need an id path variable from the request VVV
app.delete('/api/owner', managementController.deleteOwner);

// Tank enpoints
app.post('/api/owner/tankArmory', managementController.createTank);
app.put('/api/owner/tankArmory/:id/:newName', managementController.updateTankName)
app.delete('/api/owner/tankArmory/:id', managementController.deleteTank);

// Stat endpoints

const port = 3008;
app.listen(port, () => console.log(`Server listening on port ${port}`));