const mongoose = require('mongoose');

const BucketSchema = new mongoose.Schema({
    user_id: {type: String},
    title: {type: String, default :''},
    description: {type: String, default :''}
},  { timestamps: true});


mongoose.model('Bucket', BucketSchema);