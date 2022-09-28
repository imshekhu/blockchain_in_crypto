module.exports = async () => {

    const User =  require('./models/Users');
    const Role = require('./models/Roles')

const errHandler = (err) => {
console.error("Error :: ", err)
}

const role = await Role.create(
    {
        role_name: "admin"
    }
).catch(errHandler);

const user = await  User.create(
    {first_name:"Test 1",
    email:"email",
    password: "password",
    role : role.id
}
).catch(errHandler);

}

