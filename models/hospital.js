/**
 * Car
 *
 * @module      :: Model
 * @description :: Represent data model for the Cars
 * @author      :: Asep Maulana Ismail
 */
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/hospital', function(err, res) 
  {   if(err) 
    {     
    console.log('error connecting to MongoDB Database. ' + err);   } 
    else {     
      console.log('Connected to Database');   } 
    });
var Schema = mongoose.Schema;
var DoctorSchema = new Schema({

  name_doctor:    {
    type    : String,
    require : true
  },
  adress:   {
    type: String,
    require : true
  },
  spesialist:   {
    type: String,
    require : true
  },
  modified: {
    type    : Date,
    default : Date.now
  }
});
var Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;