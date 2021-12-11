module.exports = (mongoose) => {

    const { Schema, model: Model } = mongoose;
    const { String, Number, ObjectId } = Schema.Types;

    const houseSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        homeImg: {
            type: String,
            required: true
        },
        propertyDesc: {
            type: String,
            required: true
        },
        availablePieces: {
            type: Number,
            required: true
        },
        rentedAHome: {
            type: Array,
            ref: "User"
        },
        owner: {
            type: ObjectId,
            ref: "User"
        }

    });

    return Model('House', houseSchema);
};