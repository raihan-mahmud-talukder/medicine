const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    genericName: { type: String, required: true },
    brandName: { type: String, required: true },
    companyName: { type: String, required: true },
    dosageForm: { type: String, required: true },
    strength: { type: String, required: true },
    packSize: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    therapeuticClass: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('products', productSchema)