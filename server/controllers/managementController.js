const tankData = require('../tankData.json');
let id = tankData.length;

module.exports = {
    read: (req, res, next) => {
        res.status(200).send(tankData)
    },

    create: (req, res, next) => {
        let {tankName, tankOwner} = req.body;
        tankData.push({
            id: id,
            tankName,
            tankOwner,
            ph: 7,
            NH3: 0,
            temperature: 68,
            salinity: 0
        });
        id++;
        res.status(200).send(tankData);
    },



    delete: (req, res, next) => {
        const targetID = req.params.id;
        // const tankIndex = tankData.findIndex(tank => tank.id == targetID);
        tankData.splice(targetID,1);
        res.status(200).send(tankData);
    }
}