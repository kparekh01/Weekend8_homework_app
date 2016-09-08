(function(){
  'use strict';

  angular.module('homework').controller('homework_ctlr', function($scope, $http){
    function setup() {
      $http.get('https://data.cityofnewyork.us/resource/dbw3-ymb4.json').then(function(response){
        $scope.tickets = response.data;
      });
    }
    setup();
  });
})();
