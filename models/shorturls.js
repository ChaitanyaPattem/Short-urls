const mongoose = require("mongoose")
const shortId = require('shortid')

const shorturlsSchema = new mongoose.Schema({
    fullUrl : {
        type: String,
        required: true
    },
    shortUrl : {
        type: String,
        required: true,
        default: shortId.generate
    }
})

module.exports = mongoose.model('shorturls', shorturlsSchema)