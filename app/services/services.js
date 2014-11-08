angular.module("myApp.services",[])
.factory("sharedData",function(){
  return {
    currentUser : {
      name : undefined
    }
  };
});