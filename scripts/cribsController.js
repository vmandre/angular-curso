angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory){
		
		$scope.cribs = cribsFactory.getCribs();
	});