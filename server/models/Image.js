const {Schema, model} = require('mongoose')

const imageSchema = new Schema(
    {
        image: {
            type: String
        }
    }
)

const Image = model('Image', imageSchema);

module.exports = Image;