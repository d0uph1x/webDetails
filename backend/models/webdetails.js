import mongoose from 'mongoose'

const webdetailsSchema = mongoose.Schema({
    sitename: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    scope_of_work: {
        type: String,
        required: true
    },
    contract_values: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

const Webdetails = mongoose.model('Webdetails', webdetailsSchema)

export default Webdetails;