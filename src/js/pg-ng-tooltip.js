/*
	
	Created by Rafael Violato @ pagar.me
	rfviolato@gmail.com

*/
'use strict';

(function(){

	angular.module('pg-ng-tooltip', [])
	.directive('pgNgTooltip', tooltipCore)
	.directive('tooltipTrigger', tooltipTrigger);

	function tooltipCore(){

		var directive = {
			restrict: 'AEC',
			controller: controller,
			postLink: postLink,
		};

		return directive;

		function controller(){

			console.log('im up!');
			
		}

		function postLink(){
			
		}
		
	}

	function tooltipTrigger(){

		var directive = {
			scope: {
				text: '@tooltipText',
				type: '@eventType',
			},
			restrict: 'AEC',
			controller: controller,
			postLink: postLink,
		};

		return directive;

		function controller(){

			console.log('im also up!');
			
		}

		function postLink(){
			
		}
		
	}
	
})();