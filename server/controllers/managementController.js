const ownerData = require('../ownerData.json');
//don't change these VVV

let currentOwner = 0;
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
        const {tankName} = req.body;
        
        ownerData[currentOwner].tankArmory.push({
            tankID: tankID,
            tankName,
            ph: 7,
            NH3: 0,
            temperature: 68,
            salinity: 0
        });
        tankID++;
        res.status(200).send(ownerData);
    },

    updateTankName: (req, res, next) => {
        const targetTankID = req.params.id;
        const newTankName = req.params.newName
        ownerData[currentOwner].tankArmory[targetTankID].tankName = `${newTankName}`;
        res.status(200).send(ownerData);
    },

    deleteTank: (req, res, next) => {
        const targetTankID = req.params.id;
        ownerData[currentOwner].tankArmory.splice(targetTankID,1);
        res.status(200).send(ownerData);
    },

    // Stat operations
    // updateStats: (req, res, next) => {
    //     const {pH, NH3, temperature, salinity} = req.body;

    //     if (pH)
    // }
}