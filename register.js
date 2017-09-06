
var mongoose = require('mongoose')
var assert = require('assert');
mongoose.connect('mongodb://localhost/credentials');
var db = require('mongoose');
var Schema = mongoose.Schema
var clubSchema = new Schema({
   username: String,
   password:String,
role:String,
})

var Club = mongoose.model('data', clubSchema)

// Now, the interesting part:
data = [{'username':'Sourav','password':'Bhargava','role': 'USER'},
{'username':'sourav.bhargava@sourcefuse.com',password:'sHolay@2016',role: 'ADMIN'}]
Club.collection.insertMany(data, function(err,r) {
 assert.equal(null, err);
 assert.equal(2, r.insertedCount);
db.close();
 })

