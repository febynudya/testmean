// public/core.js
var hospitalManager = angular.module('hospitalManager', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all and show them
    $http.get('/doctor/')
        .success(function(data) {
            $scope.doctors = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createDoctor = function() {
      if($scope.formData._id == null) {
            
             $http.post('/doctor/', $scope.formData)
              .success(function(data) {
                // clear the form so our user is ready to enter another
                     $scope.formData = {}; 
   
              $http.get('/doctor/')
               .success(function(data) {
                $scope.doctors = data;
                console.log(data);
               })
               .error(function(data) {
                console.log('Error: ' + data);
               });
    
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        } else {
            $http.put('/doctor/' + $scope.formData._id, $scope.formData)
            .success(function(data) {
                // clear the form so our user is ready to enter another                                
                $scope.formData = {}; 
    
                $http.get('/doctor/')
                 .success(function(data) {
                  $scope.doctors = data;
                  console.log(data);
                 })
                 .error(function(data) {
                  console.log('Error: ' + data);
                 });
                  
                          })
                .error(function(data) {
                    console.log('Error: ' + data);
                })               
        }
        
    };

    $scope.deleteDoctor = function(id) {
        $http.delete('/doctor/' + id)
            .success(function(data) {    
          $http.get('/doctor/')
           .success(function(data) {
            $scope.doctors = data;
            console.log(data);
           })
           .error(function(data) {
            console.log('Error: ' + data);
           });
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
    };

    
    $scope.updateDoctor = function() {
        $http.put('/doctor/' + $scope.formDataUpdate.id, $scope.formDataUpdate)
            .success(function(data) {
                // clear the form so our user is ready to enter another                                
                $scope.formDataUpdate = {}; 
    
                $http.get('/doctor/')
                 .success(function(data) {
                  $scope.doctors = data;
                  console.log(data);
                 })
                 .error(function(data) {
                  console.log('Error: ' + data);
                 });
                  
                          })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
    };
    $scope.editDoctor = function(id) {
        for(i in $scope.doctors) {
            if($scope.doctors[i]._id == id) {
                $scope.formData = angular.copy($scope.doctors[i]);
            }
        }
    }
    //patient
    $scope.formDataPatient = {};

    // when landing on the page, get all and show them
    $http.get('/patient/')
        .success(function(data) {
            $scope.patients = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createPatient = function() {
        if($scope.formDataPatient._id == null) {
            
             $http.post('/patient/', $scope.formDataPatient)
              .success(function(data) {
                // clear the form so our user is ready to enter another
                     $scope.formDataPatient = {}; 
   
              $http.get('/patient/')
               .success(function(data) {
                $scope.patients = data;
                console.log(data);
               })
               .error(function(data) {
                console.log('Error: ' + data);
               });
    
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        } else {
            $http.put('/patient/' + $scope.formDataPatient._id, $scope.formDataPatient)
            .success(function(data) {
                // clear the form so our user is ready to enter another                                
                $scope.formDataPatient = {}; 
    
                $http.get('/patient/')
                 .success(function(data) {
                  $scope.patients = data;
                  console.log(data);
                 })
                 .error(function(data) {
                  console.log('Error: ' + data);
                 });
                  
                          })
                .error(function(data) {
                    console.log('Error: ' + data);
                })               
        }
        
    
    };

    $scope.deletePatient = function(id) {
        $http.delete('/patient/' + id)
            .success(function(data) {    
        $http.get('/patient/')
         .success(function(data) {
          $scope.patients = data;
          console.log(data);
         })
         .error(function(data) {
          console.log('Error: ' + data);
         });
                  })
                  .error(function(data) {
                      console.log('Error: ' + data);
                  });
    };

    $scope.editPatient = function(id) {
        for(i in $scope.patients) {
            if($scope.patients[i]._id == id) {
                $scope.formDataPatient = angular.copy($scope.patients[i]);
            }
        }
    }
    $scope.updatePatient = function() {
        $http.put('/patient/' + $scope.formDataUpdatePatient.id, $scope.formDataUpdatePatient)
            .success(function(data) {
                // clear the form so our user is ready to enter another                                
                $scope.formDataUpdate = {}; 
    
                $http.get('/patient/')
                 .success(function(data) {
                  $scope.patients = data;
                  console.log(data);
                 })
                 .error(function(data) {
                  console.log('Error: ' + data);
                 });
                  
                          })
                          .error(function(data) {
                              console.log('Error: ' + data);
                          });
    };

    //medical
    $scope.formDataMedical = {};

    // when landing on the page, get all and show them
    $http.get('/medical/')
        .success(function(data) {
            $scope.medicals = data;
            ;
          
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createMedical = function() {
        if($scope.formDataMedical._id == null) {
            
             $http.post('/medical/', $scope.formDataMedical)
              .success(function(data) {
                // clear the form so our user is ready to enter another
                     $scope.formDataMedical = {}; 
   
              $http.get('/medical/')
               .success(function(data) {
                $scope.medicals = data;
                console.log(data);
               })
               .error(function(data) {
                console.log('Error: ' + data);
               });
    
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        } else {
            $http.put('/medical/' + $scope.formDataMedical._id, $scope.formDataMedical)
            .success(function(data) {
                // clear the form so our user is ready to enter another                                
                $scope.formDataMedical = {}; 
    
                $http.get('/medical/')
                 .success(function(data) {
                  $scope.medicals = data;
                  console.log(data);
                 })
                 .error(function(data) {
                  console.log('Error: ' + data);
                 });
                  
                          })
                .error(function(data) {
                    console.log('Error: ' + data);
                })               
        }
        
    
    };

    $scope.deleteMedical = function(id) {
        $http.delete('/medical/' + id)
            .success(function(data) {    
        $http.get('/medical/')
         .success(function(data) {
          $scope.medicals = data;
          console.log(data);
         })
         .error(function(data) {
          console.log('Error: ' + data);
         });
                  })
                  .error(function(data) {
                      console.log('Error: ' + data);
                  });
    };

    $scope.editMedical = function(id) {
        for(i in $scope.medicals) {
            if($scope.medicals[i]._id == id) {
                $scope.formDataMedical = angular.copy($scope.medicals[i]);
            }
        }
    }
    $scope.updateMedical = function() {
        $http.put('/medical/' + $scope.formDataUpdateMedical.id, $scope.formDataUpdateMedical)
            .success(function(data) {
                // clear the form so our user is ready to enter another                                
                $scope.formDataUpdateMedical = {}; 
    
                $http.get('/medicals/')
                 .success(function(data) {
                  $scope.medicals = data;
                  console.log(data);
                 })
                 .error(function(data) {
                  console.log('Error: ' + data);
                 });
                  
                          })
                          .error(function(data) {
                              console.log('Error: ' + data);
                          });
    };
}
