angular.module('fasionistaApp')
.directive('pressLinks', function(){
	return {
		replace: true,
		restrict: 'E',
		link: function(scope,elem,attrs){},
		templateUrl: 'views/partials/pressLinks.html'
	};
});