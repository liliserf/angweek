'use strict';

angular.module('myApp.index', ['ngRoute','myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'IndexCtrl'
  });
}])

.controller('IndexCtrl', ['$scope','sharedData','firebaseService',function($scope,sharedData,firebaseService) {

  $scope.user = sharedData.currentUser;

  $scope.rooms = firebaseService.getRooms();

  if($scope.rooms.length === 0){
    $scope.rooms.$add({name : 'room1'});
    $scope.rooms.$add({name : 'room2'});
    $scope.rooms.$add({name : 'room3'});
    $scope.rooms.$add({name : 'room4'});
    $scope.rooms.$add({name : 'room5'});
  };

  $scope.doWeHaveAName = function(){
    return $scope.user.name
  };

  $scope.saveName = function(){
    $scope.user.name = $scope.userName;
  };



}]);