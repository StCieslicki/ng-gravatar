'use strict';

angular.module('ngGravatarApp')
  .directive('ngGravatar', function () {
    return {
      template: '<img src="http://gravatar.com/avatar/{{imgHash}}?s={{imgSize}}" alt="gravatarImg">',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
       scope.imgHash = attrs.hash;
       scope.imgSize = attrs.size || '300';
      }
    };
  });
