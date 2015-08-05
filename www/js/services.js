var app = angular.module('starter.controllers')

app.factory('UserService', function(UserDataService) {

  return {
    login: function(user) {
      console.log(user);
      return UserDataService.login(user);
    }
  };
});


app.factory('UserDataService', function($resource, REST_BASE_URL) {
  var base_url = REST_BASE_URL;
  return $resource(base_url + '/user/:id/:type', {
    id: '@id'
  },{
    login:{
        method:'POST',
        params:{id:'@id',
        type:'login'
      },
      isArray:false
    }
  });
});


app.factory("RequestService",['RequestDataService',
function(RequestDataService){

  return{
    getByCity: function(city) {
      console.log(city);
      return RequestDataService.getByCity(city);
    },

    create: function(request) {
      console.log(request);
      return RequestDataService.create(request);
    },

    getById: function(request) {
      console.log(request);
      return RequestDataService.getById(request);
    }
  }

}])

//All Users related admin actions go here.
app.factory('RequestDataService', function($resource, REST_BASE_URL) {
  var base_url = REST_BASE_URL;
  return $resource(base_url + '/request/:id/:type', {
    id: '@id'
  },{
    getByCity:{
        method:'POST',
        params:{id:'@id',
        type:'getByCity'
      },
      isArray:true
    },
    create:{
        method:'POST',
        params:{id:'@id',
        type:'create'
      },
      isArray:false
    },
    getById:{
        method:'POST',
        params:{id:'@id',
        type:'getById'
      },
      isArray:false
    }
  });

});
