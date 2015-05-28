/*
	
	Created by Rafael Violato @ pagar.me
	rfviolato@gmail.com

*/

'use strict';

(function(){

	angular.module('pg-ng-tooltip', [])
	.directive('pgNgTooltip', tooltipCore)
	.directive('tooltipTrigger', tooltipTrigger);

	tooltipCore.$inject = ['$document'];

	function tooltipCore($document){

		var directive = {
			scope:{
				// showingClass: '@',
				// textNode: '@',
			},
			restrict: 'AEC',
			link: postLink,
		};

		return directive;

		function postLink($scope, $element, attrs, ctrl){

			var showing = false;

			$scope.$on('pg-tooltip-show', show);
			$scope.$on('pg-tooltip-hide', hide);
			$document.on('mousemove', mousemove);

			function show($evt, data){

				showing = true;
				$element.text(data.text);
				$element.addClass('showing');
				
			}

			function hide(){

				showing = false;
				$element.removeClass('showing');
				$element.on('transitionend', transitionend);
				
			}

			function mousemove(evt){

	            var _x = evt.pageX || evt.clientX;
	            var _y = evt.pageY || evt.clientY;

	            if(showing){

	              moveTooltip(_x, _y);

	            }				
			}

			function transitionend(){
				
				if(!showing){

					$element.removeAttr('style');

				}
				
			}

			function moveTooltip(x, y){

	            var _width = $element.prop('offsetWidth');
	            var _height = $element.prop('offsetHeight');
	            var _top;
	            var _left;
	            var _widthAdjust = (_width/2);
	            var _heightAdjust = 10;

	            if((_heightAdjust + _height) + y <= window.innerHeight){

	              //position underneath the mouse cursor
	              _top = y + _height;

	            }else{

	              //position atop the mouse cursor
	              _top = y - _height;

	            }

	            if((_widthAdjust + x) >= window.innerWidth){

	              //position to the left
	              _left = x - width;

	            }else if(x - _widthAdjust <= 0){

	              //position to the right
	              _left = x;

	            }else{

	              //posicionar proximo ao mouse
	              _left = x - _widthAdjust;

	            }

	            $element.css({
	            	top: _top + 'px',
	            	left: _left + 'px',
	            });
				
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

			$scope.delay ? $scope.delay = parseInt($scope.delay) : $scope.delay = 0;

			$element.on('mouseenter', showTrigger);
			$element.on('mouseleave', hideTrigger);
			$scope.$on('$destroy', destroy);

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

			function destroy(){

				$element.off('mouseenter mouseleave');
				
			}
			
		}
		
	}
	
})();