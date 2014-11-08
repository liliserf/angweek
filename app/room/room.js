'use strict';

angular.module('myApp.room', ['ngRoute','myApp.services','myApp.directives','myApp.directives'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/room/:id', {
    templateUrl: 'room/room.html',
    controller: 'roomCtrl'
  });
}])

.controller('roomCtrl', ['$scope','$routeParams','firebaseService','sharedData',function($scope,$routeParams,firebaseService,sharedData) {

  $scope.id = $routeParams.id;
  $scope.user = sharedData.currentUser;

}]);