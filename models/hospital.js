/**
 * Car
 *
 * @module      :: Model
 * @description :: Represent data model for the Cars
 * @author      :: Asep Maulana Ismail
 */

var mongoose = require('mongoose');
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
  disease:   {
    type: String,
    require : true
  },
  id_doctor:   {
    type: String,
    require : true
  },
  modified: {
    type    : Date,
    default : Date.now
  }
});
var Patient = mongoose.model('Patient', PatientSchema);
var DoctorSchema = new Schema({

  name:    {
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
module.exports = {
    Doctor: Doctor,
    Patient: Patient
};