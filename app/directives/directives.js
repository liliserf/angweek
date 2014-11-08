'use strict';

angular.module('myApp.directives', ['ngRoute','myApp.services'])

.directive('chatBox',[function(){
  return {
    scope : {
      roomId : '=roomid',
      user : '=user'
    },
    restrict : 'E',
    templateUrl : 'directives/templates/chatBox.html',
    controller : ['$scope','firebaseService',function($scope,  firebaseService,sharedData){
      $scope.stream = firebaseService.getRoomStream($scope.roomId);

      $scope.submit = function(e){
        if(e.keyIdentifier == "Enter"){
          var obj = {
            author  : $scope.user.name,
            message : $scope.text
          }
          console.log(obj);
          $scope.stream.$add(obj);
          $scope.text = '';
        }
      };

    }]
  }
}]);