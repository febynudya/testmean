/**
 * Car
 *
 * @module      :: Model
 * @description :: Represent data model for the Cars
 * @author      :: Asep Maulana Ismail
 */
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/patientdata', function(err, res) 
  {   if(err) 
    {     
    console.log('error connecting to MongoDB Database. ' + err);   } 
    else {     
      console.log('Connected to Database');   } 
    });
var Schema = mongoose.Schema;
var PatientSchema = new Schema({

  name:    {
    type    : String,
    require : true
  },
  age:   {
    type: String,
    require : true
  },
  adress:   {
    type: String,
    require : true
  },
  modified: {
    type    : Date,
    default : Date.now
  }
});
var Patient = mongoose.model('Patient', PatientSchema);;
module.exports = Patient;