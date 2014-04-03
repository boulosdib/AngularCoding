'use strict';

angular.module('angualrjsApp')
  .controller('ProjectCtrl', function($scope, $http) {
      $http({
          url: 'data/data.json',
          method: 'get',
          dataType: 'json'
      })
          .success(function(data) {
              $scope.project = data;
          })
          .error(function(response) {

          });
  });
