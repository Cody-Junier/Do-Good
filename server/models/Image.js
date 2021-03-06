const {Schema, model} = require('mongoose')
// implement cloudinary + multer SDK
const imageSchema = new Schema(
    {
        image: {
            type: String
        }
    }
)

const Image = model('Image', imageSchema);

module.exports = Image;