var appConfig = {
  flag: 0,
  color1: 0
  };// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngResource','ngCordova','uiGmapgoogle-maps'])

var app = angular.module('starter');

app.constant("REST_BASE_URL","http://localhost:1337");

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    // $cordovaGeolocation.getCurrentPosition().then(success, error);
  });
})



app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider





//-----for nav bar with slider..it must be use with abstct because we want to have any time on top
   .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.topcoupons', {
      url: "/topcoupons",
      views: {
        'menuContent' :{
          templateUrl: "templates/topcoupons.html",
          controller: 'TopCouponCtrl'
        }
      }
    })



      .state('app.couponcode', {
        url: '/couponcode',
        templateUrl: 'templates/couponcode.html',
        controller: 'CouponCodeCtrl'


  })

  .state('app.slider', {
    url: '/slider',
        templateUrl: 'templates/slider.html',
        controller: 'SliderCtrl'


  })
  .state('coupons', {
    url: '/coupons',
        templateUrl: 'templates/coupondetails.html',
        controller: 'CouponCtrl'


  })

    .state('mainscreen', {
    url: '/mainscreen',
        templateUrl: 'templates/mainscreen.html',
        controller: 'mainScreenCtrl'


  })

  .state('login', {
    url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'


  })
  .state('requestlist', {
    url: '/requestlist',
        templateUrl: 'templates/requestlist.html',
        controller: 'requestListCtrl'
  })


  .state('requestdetails', {
    url: '/requestdetails/:request_id',
        templateUrl: 'templates/requestdetails.html',
        controller: 'requestDetailsCtrl'
  })

  .state('addrequest', {
    url: '/addrequest',
        templateUrl: 'templates/addrequest.html',
        controller: 'addrequestCtrl'
  })





  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('mainscreen');

});
