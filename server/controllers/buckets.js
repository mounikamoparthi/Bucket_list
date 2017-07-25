const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const session = require('express-session');
const Bucket = mongoose.model('Bucket');
mongoose.Promise = global.Promise;


module.exports = {
addBucket: (req, res, next) => {
        let b = new Bucket(req.body);
        console.log(req.body);
        b.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
currentUserList:(req,res) =>{
        Bucket.find({user_id: req.session.user_id})
        .then(bucket => {res.json(bucket);})
				.catch(err => {res.status(500).json(err); })
    },


}