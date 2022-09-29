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
        title: req.body["title"],
          location: req.body["location"],
          owner: req.user,
          size: req.body["size"],
          price: req.body["price"]
        });
        //const result = property.setRole(req.body.role);
        res.json({message: `create Property `, id: property.id});

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

const getAllPropertyBuy = (req, res, next) => {
    propertybuy.findAll().then(function(rent_properties){
        
        console.log(rent_properties);
        res.send({error:false,message:'Property Rent list',data:rent_properties});
      }).catch(function(err){
        console.log('Oops! something went wrong, : ', err);
      });
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
    getAllPropertyBuy
    
}