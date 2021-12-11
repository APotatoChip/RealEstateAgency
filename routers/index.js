const routers = [
    { homeRouter: require('./homeRouter.js') },
    { userRouter: require('./userRouter.js') },
    { housingRouter: require('./housingRouter.js') }
];


module.exports = (router) => {
    return routers.reduce((acc, curr) => {
        const key = Object.keys(curr)[0];
        return Object.assign(acc, {
            [key]: curr[key](router)
        });
    }, {});
};