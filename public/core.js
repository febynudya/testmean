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
}
