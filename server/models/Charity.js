const {Schema, model} = require('mongoose')
const dateFormat = require('../utils/dateFormat');
const imgDefault = "https://i.stack.imgur.com/34AD2.jpg"

const charitySchema = new Schema(
    {
        charityImage: {
            type: Image,
            default: imgDefault
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
        username: {
            type: String,
            required: true
        }
    }
)

const Charity = model('Charity', charitySchema);

module.exports = Charity;