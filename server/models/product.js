const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    genericName: [],
    brandName: { type: String, required: true },
    companyName: { type: String, required: true },
    dosageForm: { type: String, required: true },
    strength: [],
    packSize: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    therapeuticClass: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('products', productSchema)