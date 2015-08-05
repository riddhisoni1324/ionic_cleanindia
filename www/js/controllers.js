


angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) { })

.controller('My', function($scope) { })

.controller("ExampleController", function($scope, $ionicSlideBoxDelegate) {
  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
})


.controller('TopCouponCtrl', function($scope,$ionicModal,$location,$ionicLoading,$timeout,$ionicPopover) {
  $scope.$on('$ionicView.afterEnter', function() {
    if(appConfig.flag==0)
    {
      appConfig.flag=1;
      console.log(appConfig.flag);

      $scope.openPopover()
    }
    else{$scope.closePopover()}


    console.log('Opened!')
  })
  console.log(appConfig.flag);


  $scope.something = function() {
    appConfig.color=1;
  };

  $ionicPopover.fromTemplateUrl('templates/slider.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });




  $scope.openPopover = function() {
    $scope.popover.show();
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };



  $scope.navigationcoupon=function(){
    $location.path('/app/coupons');

  };

  $scope.items = [
    {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
    {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
    {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
    {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
    {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
    {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
    {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'coupons',wimage: 'img/coupon-mark.png'},
    {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'coupons',wimage: 'img/coupon-mark.png'}


  ];



  $scope.slides = [
    {title: 'Why log in??', desc: 'lorem ipsum dolor sit consectetur adispicing edit',image: 'img/1.jpg'},
    {title: 'Item 2', desc: 'This is item 2'},
    {title: 'Item 3', desc: 'This is item 3'},
    {title: 'Item 4', desc: 'This is item 4'},

  ];



})

.controller('SliderCtrl', function($scope) {  })
.controller('TopCouponAfterCtrl', function($scope) {



})






.controller('CouponCtrl', function($scope,$location,$ionicModal,$ionicHistory,$ionicPopover) {
  $scope.navigation=function(){
    $location.path('/app/topcoupons');

  };




  $ionicModal.fromTemplateUrl('templates/couponcode.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  $scope.firstpopup=function(){
    $scope.modal.show()
  }


  $scope.firstpopuphide=function(){
    $scope.modal.hide()
  }

  $scope.items = [
    {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'#/coupons',wimage: 'img/winner.png'},
    {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'#/coupons',wimage: 'img/winner.png'},
    {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'#/coupons',wimage: 'img/winner.png'},
    {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'#/coupons',wimage: 'img/winner.png'},
    {title: 'ccd coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/ccd.jpg',link:'#/coupons',wimage: 'img/winner.png'},
    {title: 'paytm coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/paytm.jpg',link:'#/coupons',wimage: 'img/winner.png'},
    {title: 'subway coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/subway.jpg',link:'#/coupons',wimage: 'img/winner.png'},
    {title: 'kfc coupon', desc: 'Use to  get 30% cashback on Rs.300',image: 'img/kfc.jpg',link:'#/coupons',wimage: 'img/winner.png'}


  ];


})



.controller('CouponCodeCtrl', function($scope) { })






.controller('mainScreenCtrl', function($scope, $cordovaGeolocation) {


})

.controller('loginCtrl', function($scope, UserService, $state) {
  $scope.user = {
    username: "",
    password: ""
  }
  $scope.invalid_details = false;
  $scope.login = function (argument) {
    console.log($scope.user);

    UserService.login($scope.user).$promise
    .then(function(response) {
      console.log(response);
      if(response.value === undefined){
        $scope.invalid_details = true;
      }
      else{
        $state.go("requestlist");
      }

    })
    .catch(function(err) {
      console.log(err);

    })
  }
})
.controller('requestListCtrl', function($scope, RequestService, $state) {

  $scope.requests = [];

  $scope.navigation = function(request_id) {
    $state.go("requestdetails",{request_id: request_id});
  }

  var city = {
    value: "Mumbai"
  }
  console.log("requestListCtrl");
  RequestService.getByCity(city).$promise
  .then(function(response){
    console.log(response);
    $scope.requests = response;
  });

  // RequestService.getByCity()

})

.controller('requestDetailsCtrl', function($scope, $stateParams, RequestService, $state) {
  $scope.request_id = $stateParams.request_id;

  RequestService.getById({request_id: $scope.request_id}).$promise
  .then(function(response){
    $scope.request = response;
  })


  $scope.navigation = function() {
    $state.go("requestlist");
  }

  $scope.addressRequest = function() {
    $scope.request.status = "In progress";
    $state.go("requestlist");
  }

})

.controller('addrequestCtrl', function($scope, RequestService, $cordovaGeolocation, $http) {
  $scope.request = {};

  $scope.states = [];
  $http.get("https://actonatedev:titan%40cloudant@actonatedev.cloudant.com/axi_phoenix_replicated/_design/admin2/_view/states-view?include_docs=true")
  .then(function (_states) {
    _states.data.rows.forEach(function(row) {
      $scope.states.push(row.doc.name);
    })
  })
  .catch(function(err) {
    console.log(err);
  })


  $scope.getCities = function(state) {
    $scope.cities = [];
    $http.get("https://actonatedev:titan%40cloudant@actonatedev.cloudant.com/axi_phoenix_replicated/_design/admin2/_view/cities_view?keys=%5B%22" + state + "%22%5D&include_docs=true")
    .then(function (_cities) {
      _cities.data.rows.forEach(function(row) {
        $scope.cities.push(row.doc.name);
      })
    })
    .catch(function(err) {
      console.log(err);
    })
  }


  var posOptions = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      $scope.map = { center: { latitude: lat, longitude: long }, zoom:18,markers: [{ latitude: lat, longitude: long }] };
      $scope.marker = {
        coordinates: { latitude: lat, longitude: long },
        id: "myLocation"
      }

      console.log(position);
    }, function(err) {
      // error
    });


  $scope.addrequest = function() {
    $scope.request.status = "Open";
    console.log($scope.request);
    RequestService.create($scope.request).$promise
    .then(function(response){
      console.log(response);
    })
  }
})
