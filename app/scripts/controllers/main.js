'use strict';

/**
 * @ngdoc function
 * @name svgSymbolFlagsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the svgSymbolFlagsApp
 */
 angular.module('svgSymbolFlagsApp')
 .controller('MainCtrl', function ($scope) {
 	$scope.selectedFlags = [];
 	$scope.selectedFlagsCode = [];

 	$scope.toggleSelected = function (id) {
 		var idx = $scope.selectedFlags.indexOf(id);
 		if (idx == -1) {
 			$scope.selectedFlags.push(id);
 			$scope.selectedFlagsCode.push($scope.findFlagCode(id));
 		} else {
 			$scope.selectedFlags.splice(idx, 1);
 			$scope.selectedFlagsCode.splice(idx, 1);
 		}
 	};

 	$scope.isSelected = function (id) {
 		if ($scope.selectedFlags.indexOf(id) == -1) {
 			return '';
 		} else {
 			return 'flaf-cell-selected';
 		}
 	};

 	$scope.flagStr = function() {
 		if ($scope.selectedFlags.length == 0) {
 			return 'Select flags...';
 		} else {
 			return $scope.selectedFlagsCode;
 		}
 	};

 	$scope.findFlagCode = function(id) {
 		for (var i = 0; i < $scope.flagData.length; i++) {
 			if ($scope.flagData[i].id == id) {
 				return $scope.flagData[i].code;
 			}
 		}
 	};

 	$('.hovery').blurjs({ 
 		source: 'body',
 		offset: { x: 15, y: -12 },
 		overlay: 'rgba(0,100,100,0.1)',
 		radius: 9 });
 });
