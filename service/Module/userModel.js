const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    type: String,
    companyName: String
})

const userCollection = mongoose.model('user', userSchema);

module.exports = {

    userCollection,
    create: (fields)=>{
        const user = new userCollection(fields)
        return user.save()
    },
    getALL: () =>  userCollection.find(),
    deleteById: (Id) => userCollection.deleteOne({_id:Id}),
    updateUser: (emailId,fields) => userCollection.updateOne({emailId:emailId},fields),
    getuser: (emailId) => userCollection.findOne({emailId:emailId})
}

