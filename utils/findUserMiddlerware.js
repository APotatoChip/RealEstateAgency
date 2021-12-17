const { User } = require("../models")

module.exports = async function(id) {
    const foundUser = Promise.resolve(User.findOne(id).then((user) => {
        return user.fullName;
    }));
    console.log(foundUser);
    // const fullName = Promise.resolve(await foundUser).then((fullName) => {

    //     return fullName;
    // });
    // // console.log(await fullName);
    // return await fullName;

}