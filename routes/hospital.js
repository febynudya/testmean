/**
 * Car
 *
 * @module      :: Routes
 * @description :: Maps routes and actions
 * @author      :: Asep Maulana Ismail
 */
var path = require('path');
include: path.resolve(__dirname, "public"),
module.exports = function(app) {


  /**
   * Find and retrieves all cars
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  

}
var Doctor = require('../models/hospital.js');
var Patient = require('../models/patient.js');
var Medical = require('../models/medical.js');
module.exports = function(app) {

  findAllPatient = function(req, res) {
    console.log("GET - /patients");
    return Patient.find(function(err, patients) {
      if(!err) {
        return res.send(patients);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };



  /**
   * Find and retrieves a single car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findById = function(req, res) {

    console.log("GET - /patient/:id");
    return Patient.findById(req.params.id, function(err, patient) {

      if(!patient) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(!err) {
        return res.send({ status: 'OK', patient:patient });
      } else {

        res.statusCode = 500;
        console.log('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };




  /**
   * Creates a new car from the data request
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  addPatient = function(req, res) {

    console.log('POST - /patient');

    var patient = new Patient({
      name:    req.body.name,
      age:    req.body.age,
      adress:    req.body.adress,
      
    });

    patient.save(function(err) {

      if(err) {

        console.log('Error while saving patient: ' + err);
        res.send({ error:err });
        return;

      } else {

        console.log("Patient created");
        return res.send({ status: 'OK', patient:patient });

      }

    });

  };



  /**
   * Update a car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  updatePatient = function(req, res) {

    console.log("PUT - /patient/:id");
    return Patient.findById(req.params.id, function(err, patient) {

      if(!patient) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if (req.body.name != null) patient.name = req.body.name;
      if (req.body.age != null) patient.age = req.body.age;
      if (req.body.adress != null) patient.adress  = req.body.adress;
      return patient.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', patient:patient });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(patient);

      });
    });
  };



  /**
   * Delete a car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  deletePatient= function(req, res) {

    console.log("DELETE - /patient/:id");
    return Patient.findById(req.params.id, function(err, patient) {
      if(!patient) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return patient.remove(function(err) {
        if(!err) {
          console.log('Removed patient');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  }

  //Link routes and actions
  
  app.get('/patient', findAllPatient);
  app.get('/patient/:id', findById);
  app.post('/patient', addPatient);
  app.put('/patient/:id', updatePatient);
  app.delete('/patient/:id', deletePatient);
  /**
   * Find and retrieves all cars
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findAllDoctor = function(req, res) {
    console.log("GET - /doctors");
    return Doctor.find(function(err, doctors) {
      if(!err) {
        return res.send(doctors);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };



  /**
   * Find and retrieves a single car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findById = function(req, res) {

    console.log("GET - /doctor/:id");
    return Doctor.findById(req.params.id, function(err, doctor) {

      if(!doctor) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(!err) {
        return res.send({ status: 'OK', doctor:doctor });
      } else {

        res.statusCode = 500;
        console.log('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };




  /**
   * Creates a new car from the data request
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  addDoctor = function(req, res) {

    console.log('POST - /doctor');

    var doctor = new Doctor({
      name_doctor:    req.body.name_doctor,
      adress:    req.body.adress,
      spesialist:    req.body.spesialist,
    });

    doctor.save(function(err) {

      if(err) {

        console.log('Error while saving doctor: ' + err);
        res.send({ error:err });
        return;

      } else {

        console.log("Doctor created");
        return res.send({ status: 'OK', doctor:doctor });

      }

    });

  };



  /**
   * Update a car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  updateDoctor = function(req, res) {

    console.log("PUT - /doctor/:id");
    return Doctor.findById(req.params.id, function(err, doctor) {

      if(!doctor) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if (req.body.name_doctor != null) doctor.name_doctor = req.body.name_doctor;
      if (req.body.adress != null) doctor.adress = req.body.adress;
      if (req.body.spesialist != null) doctor.spesialist  = req.body.spesialist;

      return doctor.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', doctor:doctor });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(doctor);

      });
    });
  };



  /**
   * Delete a car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  deleteDoctor = function(req, res) {

    console.log("DELETE - /doctor/:id");
    return Doctor.findById(req.params.id, function(err, doctor) {
      if(!doctor) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return doctor.remove(function(err) {
        if(!err) {
          console.log('Removed doctor');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  }

  //Link routes and actions
  
  app.get('/doctor', findAllDoctor);
  app.get('/doctor/:id', findById);
  app.post('/doctor', addDoctor);
  app.put('/doctor/:id', updateDoctor);
  app.delete('/doctor/:id', deleteDoctor);
  app.get('/patientlist', function(req, res) {
   res.sendFile('patient.html', { root: path.join(__dirname, '../public') });
  });
  app.get('/doctorlist', function(req, res) {
   res.sendFile('doctor.html', { root: path.join(__dirname, '../public') });
  });



  //medical
  findAllMedical = function(req, res) {
    console.log("GET - /medicals");
    return Medical.find(function(err, medicals) {
      if(!err) {
        return res.send(medicals);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };



  /**
   * Find and retrieves a single car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  findById = function(req, res) {

    console.log("GET - /medical/:id");
    return Medical.findById(req.params.id, function(err, medical) {

      if(!medical) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(!err) {
        return res.send({ status: 'OK', medical:medical });
      } else {

        res.statusCode = 500;
        console.log('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };




  /**
   * Creates a new car from the data request
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  addMedical = function(req, res) {

    console.log('POST - /medical');

    var medical = new Medical({
      disease:    req.body.disease,
      id_doctor:    req.body.id_doctor,
      id_patient:    req.body.id_patient,
    });

    medical.save(function(err) {

      if(err) {

        console.log('Error while saving medical: ' + err);
        res.send({ error:err });
        return;

      } else {

        console.log("medical created");
        return res.send({ status: 'OK', medical:medical });

      }

    });

  };



  /**
   * Update a car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  updateMedical = function(req, res) {

    console.log("PUT - /medical/:id");
    return Medical.findById(req.params.id, function(err, medical) {

      if(!medical) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if (req.body.disease != null) medical.disease = req.body.disease;
      if (req.body.id_doctor != null) medical.id_doctor = req.body.id_doctor;
      if (req.body.id_patient != null) medical.id_patient  = req.body.id_patient;

      return medical.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', medical:medical });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(medical);

      });
    });
  };



  /**
   * Delete a car by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  deleteMedical= function(req, res) {

    console.log("DELETE - /medical/:id");
    return Medical.findById(req.params.id, function(err, medical) {
      if(!medical) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return medical.remove(function(err) {
        if(!err) {
          console.log('Removed medical');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  }

  //Link routes and actions
  
  app.get('/medical', findAllMedical);
  app.get('/medical/:id', findById);
  app.post('/medical', addMedical);
  app.put('/medical/:id', updateMedical);
  app.delete('/medical/:id', deleteMedical);
  app.get('/medicallist', function(req, res) {
   res.sendFile('medical.html', { root: path.join(__dirname, '../public') });
  });
}
