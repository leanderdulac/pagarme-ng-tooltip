/*
	
	Created by Rafael Violato @ pagar.me
	rfviolato@gmail.com

*/

'use strict';

(function(){

	angular.module('pg-ng-tooltip', [])
	.directive('pgNgTooltip', tooltipCore)
	.directive('tooltipTrigger', tooltipTrigger);

	//tooltipCore.$inject = [];

	function tooltipCore(){

		var directive = {
			scope:{
				showingClass: '@',
				textNode: '@',
			},
			restrict: 'AEC',
			link: postLink,
		};

		return directive;

		function postLink($scope, $element, attrs, ctrl){

			$scope.$on('pg-tooltip-show', show);
			$scope.$on('pg-tooltip-hide', hide);

			function show($evt, data){

				console.log(data.text);
				$element.text(data.text);
				$element.addClass('showing');
				
			}

			function hide(){

				$element.removeClass('showing');
				
			}
			
		}
		
	}

	tooltipTrigger.$inject = ['$rootScope', '$timeout'];

	function tooltipTrigger($rootScope, $timeout){

		var directive = {
			scope: {
				text: '@tooltipText',
				delay: '@',
			},
			restrict: 'AEC',
			link: postLink,
		};

		return directive;

		function postLink($scope, $element, attrs){

			if($scope.delay){

				$scope.delay = parseInt($scope.delay);

			}else{

				$scope.delay = 0;

			}

			$element.on('mouseenter', showTrigger);
			$element.on('mouseleave', hideTrigger);

			function showTrigger(){

				$timeout(function(){

					$rootScope.$broadcast('pg-tooltip-show', {
						text: $scope.text,
					});					

				}, $scope.delay);
				
			}

			function hideTrigger(){

				$timeout(function(){

					$rootScope.$broadcast('pg-tooltip-hide');
					
				}, $scope.delay);
				
			}
			
		}
		
	}
	
})();