const mongoose = require("mongoose")
const Users = mongoose.model("Users")

module.exports = {
	login: (req, res) => {
		Users.findOne({name: req.body.name})
			.then(data => {
				if(data){
					req.session.user_id = data._id
					res.json(true)
				} else {
					let new_user = new Users({name: req.body.name})
					new_user.save()
						.then(() => {
							req.session.user_id = new_user._id
							res.json(true)
						})
						.catch(err => res.status(500).json(err))
				}
			})
			
	},
     currentUser: (req,res) => {
        if(req.session.user_id){
			Users.findOne({_id: req.session.user_id})
				.then(user => res.json(user))
				.catch(err => res.status(412).json(err))
		} else {
			res.json(false)
		}
	},
    allUsers:(req,res) =>{
        Users.find({})
        .then(user => {console.log(user);res.json(user);})
				.catch(err => {res.status(501).json(err); })
    },
    logout: (req, res) => {
		req.session.destroy()
		res.json(true);
	}
}