(function () { 'use strict';

  var app = angular.module('flashCards');

  app.directive('flashCard', ['ScoreFactory', function (ScoreFactory) {
    return {
      restrict: 'E',
      scope: {
        card: '='
      },
      templateUrl: 'js/directives/flashCard.directive.html',
      link: function (scope, elem, attrs) {
        scope.answerQuestion = function (answer) {
          if (!scope.card.answered) {
            scope.card.answered = true;
            scope.card.answeredCorrectly = answer.correct;
            if (scope.card.answeredCorrectly === true){
              ScoreFactory.correct++;
            } else {
              ScoreFactory.incorrect++;
            }
          }
        };
      }
    };
  }]);
})();