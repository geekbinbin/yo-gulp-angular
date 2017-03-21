'use strict';

angular.module('myNewDemoAngularYo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;


angular.module('myNewDemoAngularYo',['ngAnimate','ngCookies','ngTouch','ngSanitize','ngResource'])
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
