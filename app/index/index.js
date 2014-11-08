'use strict';

angular.module('myApp.index', ['ngRoute','myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'IndexCtrl'
  });
}])

.controller('IndexCtrl', ['$scope','sharedData',function($scope,sharedData) {

  $scope.user = sharedData.currentUser;

  $scope.rooms = [

  {name : 'room1'},
  {name : 'room2'},
  {name : 'room3'},
  {name : 'room4'},
  {name : 'room5'},

  ];

  $scope.doWeHaveAName = function(){
    return $scope.user.name
  };

  $scope.saveName = function(){
    $scope.user.name = $scope.userName;
  };



}]);