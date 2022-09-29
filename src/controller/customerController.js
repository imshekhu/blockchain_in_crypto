const listOfBuying = (req, res, next) => {
    console.log("List of buting Request is === ",req.body)
    var body = req.body;
    res.json({message: `listOfBuying User `});
};

const listOfRenting = (req, res, next) => {
    var body = req.body;
    res.json({message: `listOfRenting User `});
};

module.exports = {
    listOfBuying,listOfRenting
}