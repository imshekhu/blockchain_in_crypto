const bcrypt = require("bcryptjs");
const db = require("../database/connection")
let generateAccessToken = require('../middlewares/authToken');
const { use } = require("../routes/users");
const {find_user} = require('../database/userDatabaseOp');

User = db.user;

const getUser = (req, res, next) => {
    var id = req.params['id']
    res.json({message: `Hello User ${id}`});
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

const updateUser = (req, res, next) => {
    var body = req.body;
    res.json({message: `updateUser User ${id}`});
};

const deleteUser = (req, res, next) => {
    var body = req.body;
    res.json({message: `deleteUser User ${id}`});
};

const loginUser = async (req, res, next) => {
    var body = req.body;

    var user = await find_user(req.body["email"])

    const token = generateAccessToken(user.email)

    res.json({message: `User Logged in successfully`, data: user["dataValues"], token:token });

};


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}