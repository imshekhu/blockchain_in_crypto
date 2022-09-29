const bcrypt = require("bcryptjs");
const db = require("../database/connection")
const auth = require('../middlewares/authToken')
const userDbOperations = require('../database/userDatabaseOp');

User = db.user;

var getUser = async (req, res, next) => {
    var id = req.params.id
    var user = await userDbOperations.find_user_by_id(id);
    res.json({
        user_email: user.email,
        firstname: user.firstname,
        lastname: user.lastname
    });
};

const createUser = async (req, res) => {
    // Save User to Database
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    try {
        const user = await User.create({
          firstname: req.body["firstname"],
          lastname: req.body["lastname"],
          email: req.body["email"],
          password: await bcrypt.hash(req.body["password"], salt),
        });
        const result = user.setRole(req.body.role);
        res.json({message: `createUser User `});

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
      }
    
};

const updateUser = async (req, res, next) => {
    var email = req.user;
    try {
        updated_user = await User.update(
            { firstname: req.body["firstname"],
            lastname: req.body["lastname"],
         },
            { where: { email: email } }
          )
            
        res.json({message: `Updated ${email}`});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `Error : ${error}`})
    }
    
};

const deleteUser = async (req, res, next) => {
    await User.destroy(
        {where: {
            email:req.user
        }}
    
        ).catch(error=>console.log(error))
        res.json({message: `User ${req.user}`});
};

const loginUser = async (req, res, next) => {
    var body = req.body;

    var user = await find_user(req.body["email"])

    const token = auth.generateAccessToken(user.email)

    res.json({message: `User Logged in successfully`, data: user["dataValues"], token:token });

};

const getAllUsers = async (req, res, next) => {
    User.findAll({attributes: {exclude: ['password']},}).then(function(users){
        
        console.log(users);
        res.send({error:false,message:'users list',data:users});
      }).catch(function(err){
        console.log('Oops! something went wrong, : ', err);
      });
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    getAllUsers
}