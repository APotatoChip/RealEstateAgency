const { validationResult } = require('express-validator');


module.exports = (req) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return {
            contexOptions: {
                oldInput: {...req.body },
                message: `${errors.array()[0].msg}`
            },
            isOk: false
        };
    }

    return { isOk: true };

}