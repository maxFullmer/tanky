const ownerData = require('../ownerData.json');
//don't change these VVV

let currentOwner = 1;
let ownerID = 0;
let tankID = 2;


module.exports = {

    readOwnerData: (req, res, next) => {
        res.status(200).send(ownerData);
    },

    createOwner: (req, res, next) => {
        ownerData.push({
            owner: `default${ownerID + 1}`,
            ownerID: ownerID + 1,
            tankArmory: [
                {
                    tankID: tankID,
                    tankName: `Tank ${tankID}`,
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

    getOwnerAfterNextClick: (req, res, next) => {
        console.log(currentOwner)
        if (currentOwner < ownerData.length) {
            currentOwner++;
        }
        console.log(currentOwner)
        res.status(200).send()
    },

    getOwnerAfterPrevClick: (req, res, next) => {
        console.log(currentOwner)
        if (currentOwner > 1) {
            currentOwner--;
        }
        console.log(currentOwner)
        res.status(200).send()
    },

    updateOwnerName: (req, res, next) => {
        const newOwnerName = req.params.name;
        ownerData[currentOwner-1].owner = `${newOwnerName}`;
        res.status(200).send(ownerData);
    },

    deleteOwner: (req, res, next) => {
        ownerData.splice(currentOwner-1,1);
        res.status(200).send(ownerData);
    },

    createTank: (req, res, next) => {
        const {tankName} = req.body;
        
        ownerData[currentOwner-1].tankArmory.push({
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
        const newTankName = req.params.newName;
        ownerData[currentOwner-1].tankArmory[targetTankID].tankName = `${newTankName}`;
        res.status(200).send(ownerData);
    },

    deleteTank: (req, res, next) => {
        const targetTankID = req.params.id;
        ownerData[currentOwner-1].tankArmory.splice(targetTankID,1);
        res.status(200).send(ownerData);
    }
}