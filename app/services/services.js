angular.module("myApp.services",['firebase'])

.factory("sharedData",function(){
  return {
    currentUser : {
      name : undefined
    }
  };
})

.factory("firebaseService",['$firebase',function($firebase){

  var route = 'https://videoapp.firebaseio.com/';

  return  {

    // saveRooms : function(){

    // },

    getRooms : function(){
      var ref = new Firebase(route + '/rooms');
      var sync = $firebase(ref);
      return sync.$asArray();
    }
  }

}]);