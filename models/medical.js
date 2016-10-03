/**
 * Car
 *
 * @module      :: Model
 * @description :: Represent data model for the Cars
 * @author      :: Asep Maulana Ismail
 */
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/medical', function(err, res) 
  {   if(err) 
    {     
    console.log('error connecting to MongoDB Database. ' + err);   } 
    else {     
      console.log('Connected to Database');   } 
    });
var Schema = mongoose.Schema;
var MedicalSchema = new Schema({

  disease:    {
    type    : String,
    require : true
  },
  id_doctor:   {
    type: String,
    require : true
  },
  id_patient:   {
    type: String,
    require : true
  },
  modified: {
    type    : Date,
    default : Date.now
  }
});
var Medical = mongoose.model('Medical', MedicalSchema);
module.exports = Medical;