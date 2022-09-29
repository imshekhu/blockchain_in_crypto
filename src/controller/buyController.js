const bcrypt = require("bcryptjs");
const db = require("../database/connection")
//let generateAccessToken = require('../middlewares/authToken');
const buyDbOperations = require('../database/buyDatabaseOp.js');
// hello world
propertybuy = db.propertyBuy;
// const getProperty = (req, res, next) => {
//     var id = req.params['id']
//     res.json({message: `Property ${id}`});
// };

var getProperty = async (req, res, next) => {
    var id = req.params.id
    var user = await buyDbOperations.find_property_by_id(id);
    res.json({
        property_location: property.location,
        price: property.price,
        owner: property.owner,
        size: property.size
    });
};



const createProperty = async (req, res) => {
    // Save User to Database
    try {
        const property = await propertybuy.create({
          location: req.body["location"],
          price: req.body["price"],
          owner: req.body["owner"],
          size: req.body["size"],
        });
        //const result = property.setRole(req.body.role);
        res.json({message: `create Property `});

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
      }
    
};

const updateProperty = (req, res, next) => {
    var body = req.body;
    res.json({message: `update Property ${id}`});
};

const deleteProperty = (req, res, next) => {
    var body = req.body;
    res.json({message: `delete Property ${id}`});
};

// const loginProperty = (req, res, next) => {
//     var body = req.body;
//     res.json({message: `login Property `});
// };


module.exports = {
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    
}