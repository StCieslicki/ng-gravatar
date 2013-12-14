'use strict';

angular.module('ngGravatarApp')
  .directive('ngGravatar', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ngGravatar directive');
      }
    };
  });
