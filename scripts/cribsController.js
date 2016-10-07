angular
	.module('ngCribs')
	.controller('cribsController', function($scope){
		
		$scope.cribs = [
			{
				"type" : "Condo",
				"price" : "220000",
				"address" : "213 Grove Street",
				"description" : "Excelent place, really nice view!"
			},
			{
				"type" : "House",
				"price" : "410500",
				"address" : "7823 Winding Way",
				"description" : "Beatiful home with lots of space for a large family."
			},
			{
				"type" : "Douglas",
				"price" : "395000",
				"address" : "834 River Lane",
				"description" : "Great neighbourhood and lot's of nice green space."
			}		
		];
	});