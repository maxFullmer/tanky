const ownerData = require('../ownerData.json');

//don't change these VVV
let ownerID = 0;
let tankID = 2;


module.exports = {
    // Owner operations
    readOwnerData: (req, res, next) => {
        res.status(200).send(ownerData);
    },

    createOwner: (req, res, next) => {
        ownerData.push({
            owner: `Owner ${ownerID + 1}`,
            ownerID: ownerID + 1,
            tankArmory: [
                {
                    tankID: tankID,
                    tankName: `TANK ${tankID}`,
                    ph: 7,
                    NH3: 0,
                    temperature: 68,
                    salinity: 0
                }
            ]
        })
        tankID++;
        ownerID++;
        res.status(200).send(ownerData)
    },

    updateOwnerName: (req, res, next) => {
        const currentOwner = req.params.id;
        const newOwnerName = req.params.newName
        ownerData[currentOwner].owner = `${newOwnerName}`;
        res.status(200).send(ownerData);
    },

    deleteOwner: (req, res, next) => {
        const currentOwner = req.params.id;
        ownerData.splice(currentOwner,1);
        res.status(200).send(ownerData);
    },

    // Tank operations
    createTank: (req, res, next) => {
        const currentOwner = req.params.id;
        const {newTank} = req.body;
        
        ownerData[currentOwner].tankArmory.push({
            tankID: tankID,
            tankName: newTank,
            ph: 7,
            NH3: 0,
            temperature: 68,
            salinity: 0
        });
        tankID++;
        res.status(200).send(ownerData);
    },

    // updateTankStats: (req, res, next) => {
    //     const targetTankID = req.params.id;
    //     const tankToUpdate = ownerData[currentOwner].tankArmory.findIndex(tank => tank.tankID == targetTankID)

    //     ownerData[currentOwner].tankArmory.splice(tankToUpdate,1);
        
    //     res.status(200).send(ownerData);
    // },

    deleteTank: (req, res, next) => {
        const currentOwner = req.params.id;
        const targetTankID = req.params.tankID;
        const tankToDelete = ownerData[currentOwner].tankArmory.findIndex(tank => tank.tankID == targetTankID)
        ownerData[currentOwner].tankArmory.splice(tankToDelete,1);
        res.status(200).send(ownerData);
    },

}