const bcrypt = require("bcryptjs");
const db = require("../database/connection")
//let generateAccessToken = require('../middlewares/authToken');
const rentDbOperations = require('../database/rentDatabaseOp.js');
// hello world
propertyrent = db.Rent;
// const getProperty = (req, res, next) => {
//     var id = req.params['id']
//     res.json({message: `Property ${id}`});
// };

var getProperty = async (req, res, next) => {
    var id = req.params.id
    var property = await rentDbOperations.find_property_by_id(id);
    console.log(property)
    res.json({
        property_location: property.location,
        price: property.price,
        owner: property.owner,
        size: property.size,
        contract: property.contract
    });
};



const createProperty = async (req, res) => {
    // Save User to Database
    try {
        const propertyrent_object = await propertyrent.create({
          location: req.body["location"],
          price: req.body["price"],
          owner: req.body["owner"],
          size: req.body["size"],
          contract: req.body["contract"]
        });
        //const result = property.setRole(req.body.role);
        res.json({message: `create Property ${propertyrent_object.location}`, id: propertyrent_object.id});

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