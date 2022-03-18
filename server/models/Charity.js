const {Schema, model} = require('mongoose')
const dateFormat = require('../utils/dateFormat');
// const imgDefault = "https://i.stack.imgur.com/34AD2.jpg" - see below comment

const charitySchema = new Schema(
    {
        // pending: will want an image, need to research implementation
        charityName: {
            type: String,
            require: "You must give the Charity a name"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        description:{
            type: String,
            require: 'Please tell us about this Charity.',
            minlength: 20,
            maxlength: 400
        },
        charityUrl:{
            type: String,
            require: true
        },
        imageUrl:{
            type: String,
            require: true
        },
        username: {
            type: String,
        }
    }
)

const Charity = model('Charity', charitySchema);

module.exports = Charity;