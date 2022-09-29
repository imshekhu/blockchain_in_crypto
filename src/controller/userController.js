
// hello world

const getUser = (req, res, next) => {
    var id = req.params['id']
    res.json({message: `Hello User ${id}`});
};

const createUser = (req, res, next) => {
    var body = req.body;
    res.json({message: `createUser User `})
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
};


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}