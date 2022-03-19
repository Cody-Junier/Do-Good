const { Schema, model } = require('mongoose');

// add authenticaion to user model
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        charities:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Charity'
            }
        ]

    },
    {
        toJSON:{
            virtuals: true
        }
    }
)

const User = model('User', userSchema);

module.exports = User;