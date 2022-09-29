const bcrypt = require("bcryptjs");
const db = require("../database/connection")
// hello world
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

const loginUser = (req, res, next) => {
    var body = req.body;
    res.json({message: `loginUser User `});

    const email = req.body.email;
    const password = req.body.password;
    


};


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}