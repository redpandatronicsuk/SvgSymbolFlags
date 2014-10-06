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
  .config(function ($routeProvider, $compileProvider) {
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
      var oldWhiteList = $compileProvider.aHrefSanitizationWhitelist();
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
  });

flagApp.run(function ($rootScope) {
    $rootScope.flagData = [
        {id: 'ad', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ad\"><title>ad<\/title> <rect height=\"3\" width=\"4\" fill=\"#cc1900\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#fff600\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#0000bd\"\/><\/symbol>"},
        {id: 'ar', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ar\"><title>ar<\/title> <rect height=\"3\" width=\"4\" fill=\"#75aadb\"\/> <rect height=\"1\" width=\"4\" y=\"1\" fill=\"#fff\"\/><\/symbol>"},
        {id: 'at', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-at\"><title>at<\/title> <rect height=\"3\" width=\"4\" fill=\"#f00\"\/> <rect height=\"1\" width=\"4\" y=\"1\" fill=\"#fff\"\/><\/symbol>"},
        {id: 'be', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-be\"><title>be<\/title> <rect height=\"3\" width=\"4\" fill=\"#f00\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#ffe600\"\/> <rect height=\"3\" width=\"1.333\"\/><\/symbol>"},
        {id: 'bg', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-bg\"><title>bg<\/title> <rect height=\"3\" width=\"4\" fill=\"#D62612\"\/> <rect height=\"2\" width=\"4\" fill=\"#00966E\"\/> <rect height=\"1\" width=\"4\" fill=\"#fff\"\/><\/symbol>"},
        {id: 'bo', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-bo\"><title>bo<\/title> <rect height=\"3\" width=\"4\" fill=\"#007934\"\/> <rect height=\"2\" width=\"4\" fill=\"#FCD116\"\/> <rect height=\"1\" width=\"4\" fill=\"#D52B1E\"\/><\/symbol>"},
        {id: 'ci', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ci\"><title>ci<\/title> <rect height=\"3\" width=\"4\" fill=\"#009e60\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#fff\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#f77f00\"\/><\/symbol>"},
        {id: 'de', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-de\"><title>de<\/title> <rect height=\"3\" width=\"4\" fill=\"#ffe600\"\/> <rect height=\"2\" width=\"4\" fill=\"#f00\"\/> <rect height=\"1\" width=\"4\"\/><\/symbol>"},
        {id: 'ee', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ee\"><title>ee<\/title> <rect height=\"3\" width=\"4\" fill=\"#fff\"\/> <rect height=\"2\" width=\"4\" fill=\"#000\"\/> <rect height=\"1\" width=\"4\" fill=\"#4891d9\"\/><\/symbol>"},
        {id: 'fr', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-fr\"><title>fr<\/title> <rect height=\"3\" width=\"4\" fill=\"#f00\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#fff\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#00f\"\/><\/symbol>"},
        {id: 'ga', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ga\"><title>ga<\/title> <rect height=\"3\" width=\"4\" fill=\"#3a75c4\"\/> <rect height=\"2\" width=\"4\" fill=\"#fcd116\"\/> <rect height=\"1\" width=\"4\" fill=\"#009e60\"\/><\/symbol>"},
        {id: 'gb', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-gb\"><title>gb<\/title> <clippath id=\"svgstoref9ed9468b8dd37adfef94afe1035541ct\"> <path d=\"M3,1.5 h3 v1.5 z v1.5 h-3 z h-3 v-1.5 z v-1.5 h3 z\"\/> <\/clippath> <path d=\"M0,0 v3 h4 v-3 z\" fill=\"#00247d\"\/> <path d=\"M0,0 L4,3 M4,0 L0,3\" stroke=\"#fff\" stroke-width=\".6\"\/> <path d=\"M0,0 L4,3 M4,0 L0,3\" stroke=\"#cf142b\" stroke-width=\".4\"\/> <path d=\"M2,0 v3 M0,1.5 h4\" stroke=\"#fff\" stroke-width=\"1\"\/> <path d=\"M2,0 v3 M0,1.5 h4\" stroke=\"#cf142b\" stroke-width=\".6\"\/><\/symbol>"},
        {id: 'gn', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-gn\"><title>gn<\/title> <rect height=\"3\" width=\"4\" fill=\"#009460\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#fcd116\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#ce1126\"\/><\/symbol>"},
        {id: 'hu', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-hu\"><title>hu<\/title> <rect height=\"3\" width=\"4\" fill=\"#436F4D\"\/> <rect height=\"2\" width=\"4\" fill=\"#fff\"\/> <rect height=\"1\" width=\"4\" fill=\"#CD2A3E\"\/><\/symbol>"},
        {id: 'ie', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ie\"><title>ie<\/title> <rect height=\"3\" width=\"4\" fill=\"#FF7900\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#fff\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#009A49\"\/><\/symbol>"},
        {id: 'it', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-it\"><title>it<\/title> <rect height=\"3\" width=\"4\" fill=\"#CE2B37\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#F1F2F1\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#009246\"\/><\/symbol>"},
        {id: 'jp', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-jp\"><title>jp<\/title> <rect fill=\"#fff\" height=\"3\" width=\"4\"\/> <circle fill=\"#bc002d\" cx=\"2\" cy=\"1.5\" r=\"1\"\/><\/symbol>"},
        {id: 'lt', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-lt\"><title>lt<\/title> <rect height=\"3\" width=\"4\" fill=\"#c1272d\"\/> <rect height=\"2\" width=\"4\" fill=\"#006a44\"\/> <rect height=\"1\" width=\"4\" fill=\"#fdb913\"\/><\/symbol>"},
        {id: 'lu', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-lu\"><title>lu<\/title> <rect height=\"3\" width=\"4\" fill=\"#00A1DE\"\/> <rect height=\"2\" width=\"4\" fill=\"#fff\"\/> <rect height=\"1\" width=\"4\" fill=\"#ed2939\"\/><\/symbol>"},
        {id: 'ml', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ml\"><title>ml<\/title> <rect height=\"3\" width=\"4\" fill=\"#ce1126\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#fcd116\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#14b53a\"\/><\/symbol>"},
        {id: 'ni', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ni\"><title>ni<\/title> <rect width=\"4\" height=\"3\" fill=\"#008751\"\/> <rect x=\"1.333\" width=\"1.333\" height=\"3\" fill=\"#fff\"\/><\/symbol>"},
        {id: 'nl', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-nl\"><title>nl<\/title> <rect height=\"3\" width=\"4\" fill=\"#21468B\"\/> <rect height=\"2\" width=\"4\" fill=\"#fff\"\/> <rect height=\"1\" width=\"4\" fill=\"#AE1C28\"\/><\/symbol>"},
        {id: 'pe', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-pe\"><title>pe<\/title> <rect width=\"4\" height=\"3\" fill=\"#D91023\"\/> <rect x=\"1.333\" width=\"1.333\" height=\"3\" fill=\"#fff\"\/><\/symbol>"},
        {id: 'ro', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ro\"><title>ro<\/title> <rect height=\"3\" width=\"4\" fill=\"#CE1126\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#FCD116\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#002B7F\"\/><\/symbol>"},
        {id: 'ru', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ru\"><title>ru<\/title> <rect height=\"3\" width=\"4\" fill=\"#f00\"\/> <rect height=\"2\" width=\"4\" fill=\"#00f\"\/> <rect height=\"1\" width=\"4\" fill=\"#fff\"\/><\/symbol>"},
        {id: 'sl', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-sl\"><title>sl<\/title> <rect height=\"3\" width=\"4\" fill=\"#0072C6\"\/> <rect height=\"2\" width=\"4\" fill=\"#fff\"\/> <rect height=\"1\" width=\"4\" fill=\"#1EB53A\"\/><\/symbol>"},
        {id: 'td', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-td\"><title>td<\/title> <rect height=\"3\" width=\"4\" fill=\"#c60c30\"\/> <rect height=\"3\" width=\"2.666\" fill=\"#FECB00\"\/> <rect height=\"3\" width=\"1.333\" fill=\"#002664\"\/><\/symbol>"},
        {id: 'ye', code: "<symbol viewBox=\"0 0 4 3\" id=\"flag-ye\"><title>ye<\/title> <rect height=\"3\" width=\"4\"\/> <rect height=\"2\" width=\"4\" fill=\"#fff\"\/> <rect height=\"1\" width=\"4\" fill=\"#ce1126\"\/><\/symbol>"},
    ];

    $rootScope.htmlData = {
      pre: "<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>My Flags - created with svgflags.redpandatronics.com<\/title>\n  <\/head>\n  <body>\n    <!-- Include this at the top of the body section of your html file. NOTE: display:none; so it doesn't render to the screen. -->\n    <div style=\"display:none\">\n      <svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\">",
      post: "\n    <\/svg>\n  <\/div>",
      close: "\n  <\/body>\n<\/html>"
    };

});