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

 	$scope.makeHtml = function() {
 		var htmlContent = $scope.htmlData.pre;
 		htmlContent += $scope.flagStr();
 		htmlContent += $scope.htmlData.post;

 		htmlContent += "\n    <p>Check out the source code to see how to include the flags in your html5 app...<\/p>";
 		htmlContent += "\n    <h1>Flags in this custom build:<\/h1>";
 		// Insert flags here:
 		for (var i = 0; i < $scope.selectedFlags.length; i++) {
 			htmlContent += "\n    <svg style='margin-left: 5px;' width=\"40px\" height=\"30px\"><use width=\"40px\" height=\"30px\" xlink:href=\"#flag-" + $scope.selectedFlags[i] + "\" \/><\/svg>";
 		}

 		htmlContent += "\n    <h1>To use a flag at a different size specify a different width, the aspect ratio will be kept at 4:3, or if that doesn't work, specify width and height explicitly:<\/h1>";
 		htmlContent += "\n    <svg style='margin-left: 5px;' width=\"10px\"><use width=\"10px\" xlink:href=\"#flag-" + $scope.selectedFlags[0] + "\" \/><\/svg>";
 		htmlContent += "\n    <svg style='margin-left: 5px;' width=\"100px\"><use width=\"100px\" xlink:href=\"#flag-" + $scope.selectedFlags[0] + "\" \/><\/svg>";
 		htmlContent += "\n    <svg style='margin-left: 5px;' width=\"1600px\" height=\"1200px\"><use width=\"1600px\" height=\"1200px\" xlink:href=\"#flag-" + $scope.selectedFlags[0] + "\" \/><\/svg>";

 		htmlContent += $scope.htmlData.close;
 		return htmlContent;
 	};

 	$scope.makeBlob = function() {
 		var blob = new Blob([ $scope.makeHtml() ], { type : 'text/html' });
 		window.location.href = (window.URL || window.webkitURL).createObjectURL( blob );
 	};

 	$('.hovery').blurjs({ 
 		source: 'body',
 		offset: { x: 15, y: -12 },
 		overlay: 'rgba(0,100,100,0.1)',
 		radius: 9 });
 });
