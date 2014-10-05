'use strict';

/**
 * @ngdoc overview
 * @name svgSymbolFlagsApp
 * @description
 * # svgSymbolFlagsApp
 *
 * Main module of the application.
 */
var flagApp = angular
  .module('svgSymbolFlagsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

flagApp.run(function ($rootScope) {
    $rootScope.flagData = [
        {id: 'ad', code: '<symbol viewBox="0 0 4 3" id="flag-ad"><title>ad</title> <rect height="3" width="1.333" y="0" x="0" fill="#0000bd"/> <rect height="3" width="1.333" y="0" x="1.333" fill="#fff600"/> <rect height="3" width="1.333" y="0" x="2.666" fill="#cc1900"/> </symbol>'},
        {id: 'de', code: '<symbol viewBox="0 0 4 3" id="flag-de"><title>de</title> <rect height="1" width="4" y="0"/> <rect height="1" width="4" y="1" fill="#f00"/> <rect height="1" width="4" y="2" fill="#ffe600"/> </symbol>'},
        {id: 'gb', code: '<symbol viewBox="0 0 4 3" id="flag-gb"><title>gb</title> <clippath id="svgstoref9ed9468b8dd37adfef94afe1035541ct"> <path d="M3,1.5 h3 v1.5 z v1.5 h-3 z h-3 v-1.5 z v-1.5 h3 z"/> </clippath> <path d="M0,0 v3 h4 v-3 z" fill="#00247d"/> <path d="M0,0 L4,3 M4,0 L0,3" stroke="#fff" stroke-width=".6"/> <path d="M0,0 L4,3 M4,0 L0,3" stroke="#cf142b" stroke-width=".4"/> <path d="M2,0 v3 M0,1.5 h4" stroke="#fff" stroke-width="1"/> <path d="M2,0 v3 M0,1.5 h4" stroke="#cf142b" stroke-width=".6"/> </symbol>'},
        {id: 'jp', code: '<symbol viewBox="0 0 4 3" id="flag-jp"><title>jp</title> <rect fill="#fff" height="3" width="4"/> <circle fill="#bc002d" cx="2" cy="1.5" r="1"/> </symbol>'}
    ];
});