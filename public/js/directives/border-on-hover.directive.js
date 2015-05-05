(function () { 'use strict';

  var app = angular.module('flashCards');

  app.directive('borderOnHover', [function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {

        elem.on('mouseenter', function() {
          elem.addClass('border-on-hover');
        });


      }
    };
  }]);
})();


