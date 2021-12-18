module.exports = (isAuthNeeded = false) => {
    return (req, res, next) => {
        const isNotAuthWhenIsNeeded = !req.user && isAuthNeeded;
        const isAuthWhenIsNotNeeded = req.user && !isAuthNeeded;

        if (isNotAuthWhenIsNeeded || isAuthWhenIsNotNeeded) {

            res.render('./home/404.hbs');
            return;
        }

        next();
    };
};